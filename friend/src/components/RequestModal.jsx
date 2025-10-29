import React, { useState } from 'react';
import '../styles/requestModal.css';

const RequestModal = ({ isOpen, onClose, onSubmit }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [telegram, setTelegram] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
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
    if (onSubmit) onSubmit(data);
    // reset and close
    setFullName('');
    setEmail('');
    setTelegram('');
    onClose();
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
