import React, { useState } from 'react';
import '../styles/requestModal.css';

const RequestModal = ({ isOpen, onClose, onSubmit }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [telegram, setTelegram] = useState('');

  if (!isOpen) return null;

  const sendToTelegram = async (data) => {
    const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
    const CHAT_ID = -1003484757397;
    
    const message = `Новая заявка с сайта:

ФИО: ${data.fullName}
Email: ${data.email}
Telegram: ${data.telegram || 'Не указан'}
Время: ${new Date().toLocaleString('ru-RU')}`;

    try {

      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message.trim(),
          disable_web_page_preview: true
        }),
      });

      if (response.ok) {
        alert('Заявка отправлена успешно!');
        return true;
      } else {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        console.error('Ошибка отправки в Telegram:', response.status, errorData);
        alert(`Ошибка отправки заявки: ${response.status}. Попробуйте позже.`);
        return false;
      }
    } catch (error) {
      console.error('Ошибка при отправке в Telegram:', error);
      alert('Ошибка отправки заявки. Проверьте интернет-соединение.');
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // basic validation
    if (!fullName.trim()) {
      alert('Пожалуйста, укажите ФИО');
      return;
    }
    if (!email.trim()) {
      alert('Пожалуйста, укажите email');
      return;
    }
    
    // pass data upward
    const data = { fullName, email, telegram };
    
    // Send to Telegram
    const success = await sendToTelegram(data);
    
    if (success) {
      if (onSubmit) onSubmit(data);
      // reset and close
      setFullName('');
      setEmail('');
      setTelegram('');
      onClose();
    }
  };

  return (
    <div className="request-modal-backdrop" onMouseDown={onClose}>
      <div className="request-modal-card" onMouseDown={(e) => e.stopPropagation()}>
        <button className="request-modal-close" onClick={onClose} aria-label="Close">×</button>
        <h3 className="request-modal-title">Оставить заявку</h3>
        <form className="request-modal-form" onSubmit={handleSubmit}>
          <label className="request-modal-label">
            ФИО
            <input
              className="request-modal-input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Иванов Иван Иванович"
            />
          </label>

          <label className="request-modal-label">
            Email
            <input
              className="request-modal-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
            />
          </label>

          <label className="request-modal-label">
            Telegram ID
            <input
              className="request-modal-input"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
              placeholder="@your_telegram"
            />
          </label>

          <div className="request-modal-actions">
            <button type="button" className="request-modal-btn request-modal-cancel" onClick={onClose}>Отмена</button>
            <button type="submit" className="request-modal-btn request-modal-submit">Отправить</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestModal;
