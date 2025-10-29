import React, { useRef, useState, useEffect } from 'react';
import '../styles/FriendScrollSection.css'; // Убедитесь, что стили подключены

import kulonImage from '../images/kulon.png';

// Импорты изображений (оставил как у вас)
import footerLogo from '../images/footer-logo.svg';
import ladyImage from '../images/lady.jpg';
import ladyVerticalImage from '../images/lady-more-vertical.jpg';
import upperLeftGradient from '../images/upper_left_gradient.png';
import bottomLeftGradient from '../images/bottom_left_gradient.png';
import bottomRightGradient from '../images/bottom_right_gradient.png';
import upperRightGradient from '../images/upper_right_gradient.png';
import wordCloud0 from '../images/word_cloud_0.png';
import wordCloud1 from '../images/word_cloud_1.png';
import wordCloud2 from '../images/word_cloud_2.png';
import wordCloud3 from '../images/word_cloud_3.png';
import wordCloud4 from '../images/word_cloud_4.png';
// Phone component images
import phoneImage from '../images/phone.png';
import arrowRight from '../images/arrow_right.png';
import appStoreBadge from '../images/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg';


const FriendPage = () => {
    // 1. Создаем ref для секции, к которой будем скроллить
    const animationSectionRef = useRef(null);

    // 2. Функция для плавной прокрутки
    const handleScrollDown = () => {
        animationSectionRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start', // Скроллим к началу секции
        });
    };

    return (
        <main>
            {/* --- 1. НОВЫЙ ИНТРО-БЛОК --- */}
            <section
                className="relative flex items-start justify-center w-full h-[100dvh] bg-white"
                aria-label="Intro Section"
            >
                {/* Центральное изображение */}
                <div className="flex flex-col items-center px-4">
                    <img
                        src={kulonImage}
                        alt="Kulon"
                        // Задаем разумные ограничения по размеру, чтобы он не был слишком большим
                        className="w-auto h-auto max-w-[60vw] sm:max-w-[40vw] md:max-w-[30vw] max-h-[60vh] animate-sway"                    />
                </div>

                {/* Стрелка вниз */}
                <button
                    onClick={handleScrollDown}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 p-2 rounded-full transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400 animate-bounce[animation-duration:2s]"
                    aria-label="Scroll down to animation"
                >
                    {/* Ваш SVG-код для стрелки */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 9L12 15L6 9" stroke="#33363F" strokeWidth="2" />
                    </svg>
                </button>
            </section>

            {/* --- 2. ВАША СЕКЦИЯ АНИМАЦИИ --- */}
            {/* Мы "оборачиваем" ее в div и вешаем ref на этот div.
              Это позволяет нам прокрутиться к ней.
            */}
            <div ref={animationSectionRef}>
                <ScrollAnimation />
            </div>
        </main>
    );
};

// Функция для интерполяции значения
const lerp = (start, end, t) => start * (1 - t) + end * t;
// Функция для нормализации прогресса в заданном диапазоне
const normalizeProgress = (progress, start, end) => {
    if (progress < start) return 0;
    if (progress > end) return 1;
    return (progress - start) / (end - start);
};

const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

const ScrollAnimation = () => {
    const sectionRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Расчет прогресса прокрутки внутри секции
    const updateScrollProgress = () => {
        const element = sectionRef.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const scrollTop = window.scrollY - element.offsetTop; // Прокрутка относительно начала секции
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Общая высота прокрутки внутри секции = высота секции - высота окна
        const totalScrollableHeight = elementHeight - windowHeight;

        if (totalScrollableHeight <= 0) {
            setScrollProgress(0); // Секция меньше окна, прокрутки нет
            return;
        }

        const currentProgress = Math.max(0, Math.min(1, scrollTop / totalScrollableHeight));
        setScrollProgress(currentProgress);
    };

    useEffect(() => {
        // Добавляем requestAnimationFrame для плавности
        let animationFrameId = null;
        const handleScroll = () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(updateScrollProgress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        updateScrollProgress(); // Первоначальный расчет

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // --- Параметры анимации ---

    // 1. Белый слой (появляется в конце и остается)
    const blurEndOpacity = normalizeProgress(scrollProgress, 0.70, 0.75);

    const logoScaleProgress = normalizeProgress(scrollProgress, 0.0, 0.50);
    const logoScale = lerp(1.5, 8, logoScaleProgress);

    const logoOpacity = 1 - normalizeProgress(scrollProgress, 0.25, 0.38);

    // Phone section elements (появляются после белого слоя)
    const phoneOpacity = normalizeProgress(scrollProgress, 0.78, 0.82);
    const phoneScale = lerp(0.8, 1, normalizeProgress(scrollProgress, 0.78, 0.82));

    const friendLogoOpacity = normalizeProgress(scrollProgress, 0.83, 0.87);
    const friendTextOpacity = normalizeProgress(scrollProgress, 0.85, 0.89);
    
    const orderButtonOpacity = normalizeProgress(scrollProgress, 0.87, 0.91);
    const productDetailsOpacity = normalizeProgress(scrollProgress, 0.89, 0.93);
    const appStoreOpacity = normalizeProgress(scrollProgress, 0.91, 0.95);


    // 3. Девушка (плавное появление и исчезновение)
    // Появляется ~0.35 - 0.4, исчезает ~0.6 - 0.69
    const ladyFadeInProgress = normalizeProgress(scrollProgress, 0.35, 0.42);
    const ladyFadeOutProgress = 1 - normalizeProgress(scrollProgress, 0.6, 0.69);
    const ladyOpacity = Math.min(ladyFadeInProgress, ladyFadeOutProgress);
    const gradientOpacity = normalizeProgress(scrollProgress, 0.44, 0.48) * (1 - normalizeProgress(scrollProgress, 0.62, 0.66));


    // 5. Word Clouds
    const clouds = [wordCloud0, wordCloud1, wordCloud2, wordCloud3, wordCloud4];

    // Параметры для анимации облаков (тайминги и позиции примерные, нужно подбирать)
    // start: начало движения, end: конец движения (центр)
    // fadeInEnd: конец появления, fadeOutStart: начало исчезновения
    const cloudAnimations = [
        // cloud 0 (target: top-left по CSS переменным)
        { start: 0.35, end: 0.44, fadeInEnd: 0.39, initialOffsetX: -150, initialOffsetY: -150, finalLeft: '25%', finalTop: '30%' },
        // cloud 1 (едет в нижний левый угол)
        { start: 0.40, end: 0.49, fadeInEnd: 0.44, initialOffsetX: -150, initialOffsetY: 150, finalLeft: '20%', finalTop: '70%' },
        // cloud 2 (едет в верхний правый угол)
        { start: 0.45, end: 0.54, fadeInEnd: 0.49, initialOffsetX: 150, initialOffsetY: -150, finalLeft: '75%', finalTop: '25%' },
        // cloud 3 (едет в нижний правый угол)
        { start: 0.50, end: 0.59, fadeInEnd: 0.54, initialOffsetX: 150, initialOffsetY: 150, finalLeft: '80%', finalTop: '65%' },
        // cloud 4 (появляется в центре и ОСТАЕТСЯ до конца)
        { start: 0.61, end: 0.61, fadeInEnd: 0.63, fadeOutStart: 1.1, initialOffsetX: 0, initialOffsetY: 0 },
    ];
    const CLOUD_4_FADEOUT_START = cloudAnimations[4].fadeOutStart;
    const FADE_OUT_DURATION = 0.04; // Длительность исчезновения облака


    return (
        // Увеличьте min-h, если анимация кажется слишком быстрой
        <section ref={sectionRef} className="relative min-h-[12000px] w-full bg-white" aria-label="Friend Scroll Animation Section">
            {/* sticky-контейнер для анимации */}
            {/* Добавляем CSS переменные прямо сюда */}
            <div className="sticky top-0 w-full h-[100dvh] overflow-hidden
                  [--wc0-x:20dvw] [--wc0-y:26dvh]
                  [--wc1-x:22dvw] [--wc1-y:30dvh]
                  [--wc2-x:25dvw] [--wc2-y:20dvh]
                  [--wc3-x:26dvw] [--wc3-y:30dvh]
                  sm:[--wc0-x:38dvw] sm:[--wc0-y:20dvh]
                  sm:[--wc1-x:38dvw] sm:[--wc1-y:20dvh] /* В CSS эти позиции совпадают для sm */
                  sm:[--wc2-x:38dvw] sm:[--wc2-y:20dvh] /* В CSS эти позиции совпадают для sm */
                  sm:[--wc3-x:38dvw] sm:[--wc3-y:20dvh] /* В CSS эти позиции совпадают для sm */
                ">

                {/* --- Элементы анимации --- */}

                {/* ЛОГОТИП */}
                <img
                    src={footerLogo} alt="Friend Logo"
                    // Убираем max-width/height, чтобы позволить логотипу сильно увеличиться
                    className="absolute z-25 bottom-1/2 left-1/2 w-1/2 h-1/4"
                    style={{
                        // width: '80vw', height: '32vw', // Можно убрать или изменить, если мешает
                        opacity: logoOpacity,
                        filter: 'drop-shadow(0 0 40px #fff) drop-shadow(0 0 10px #fff)',
                        transform: `translate(-50%, 50%) scale(${logoScale})`,
                        willChange: 'transform, opacity',
                    }}
                />

                {/* ДЕВУШКА */}
                <picture className="absolute bottom-0 left-0 w-full h-full z-20">
                    <source srcSet={ladyImage} media="(min-width: 640px)" />
                    <img src={ladyVerticalImage} alt="Lady" className="w-full h-full object-cover object-bottom" style={{ opacity: ladyOpacity, willChange: 'opacity' }} />
                </picture>

                {/* ГРАДИЕНТЫ */}
                <img src={upperLeftGradient} alt="" className="absolute inset-0 w-full h-full z-15" style={{ opacity: gradientOpacity, willChange: 'opacity' }}/>
                <img src={bottomLeftGradient} alt="" className="absolute inset-0 w-full h-full z-15" style={{ opacity: gradientOpacity, willChange: 'opacity' }}/>
                <img src={bottomRightGradient} alt="" className="absolute inset-0 w-full h-full z-15" style={{ opacity: gradientOpacity, willChange: 'opacity' }}/>
                <img src={upperRightGradient} alt="" className="absolute inset-0 w-full h-full z-15" style={{ opacity: gradientOpacity, willChange: 'opacity' }}/>


                {/* WORD CLOUDS */}
                {clouds.map((cloudSrc, idx) => {
                    const anim = cloudAnimations[idx];
                    const moveProgress = normalizeProgress(scrollProgress, anim.start, anim.end);

                    // Opacity
                    const fadeIn = normalizeProgress(scrollProgress, anim.start, anim.fadeInEnd);
                    let cloudOpacity;
                    
                    if (idx === 4) {
                        // Облако 4 остается видимым до самого конца
                        cloudOpacity = fadeIn; // Не тускнеет
                    } else {
                        // Облака 0-3 исчезают раньше
                        const fadeOut = 1 - normalizeProgress(scrollProgress, 0.65, 0.69);
                        cloudOpacity = Math.min(fadeIn, fadeOut);
                    }

                    // Scale
                    const scale = idx === 4 ? lerp(0.8, 1, fadeIn) : lerp(0.7, 1, moveProgress);

                    // Position & Transform
                    let styleProps = {};
                    if (idx < 4) {
                        // Облака 0-3: позиция по anim.finalLeft/Top, transform анимирует смещение к 0
                        const currentOffsetX = lerp(anim.initialOffsetX, 0, moveProgress);
                        const currentOffsetY = lerp(anim.initialOffsetY, 0, moveProgress);
                        styleProps = {
                            // Используем finalLeft/finalTop из массива cloudAnimations
                            left: anim.finalLeft,
                            top: anim.finalTop,
                            opacity: cloudOpacity,
                            // Анимируем transform от initialOffset к 0
                            transform: `translate(-50%, -50%) translate(${currentOffsetX}%, ${currentOffsetY}%) scale(${scale})`,
                        };
                    } else {
                        // Облако 4: остается на месте в центре экрана, но уменьшается при появлении телефона
                        const currentX = 50; // Остается в центре
                        const currentY = 50; // Остается в центре
                        
                        // Уменьшаем облачко когда появляется телефон (0.78-0.82)
                        const phoneAppearProgress = normalizeProgress(scrollProgress, 0.78, 0.82);
                        const cloudReductionScale = lerp(1, 0.8, phoneAppearProgress); // Уменьшается до 80% размера
                        
                        styleProps = {
                            left: `${currentX}%`,
                            top: `${currentY}%`,
                            opacity: cloudOpacity,
                            transform: `translate(-50%, -50%) scale(${scale * cloudReductionScale})`,
                        };
                    }

                    return (
                        <img
                            key={idx}
                            src={cloudSrc}
                            alt={`Word Cloud ${idx}`}
                            // Облако 4 должно быть поверх телефона, размер как в оригинале
                            className={`absolute object-contain ${idx === 4 ? 'z-60 w-100 h-100 object-cover' : 'z-30 w-80 h-80 lg:w-120 lg:h-120'}`}
                            style={{
                                ...styleProps, // Применяем рассчитанные стили
                                pointerEvents: 'none',
                                willChange: 'transform, opacity',
                                filter: idx === 4 ? 'drop-shadow(0 4px 12px rgba(0,0,0,0.2))' : 'drop-shadow(0 4px 12px rgba(255,255,255,0.6))',
                            }}
                        />
                    );
                })}

                {/* Белый слой для завершения анимации */}
                <div
                    className="absolute inset-0 bg-white z-40 pointer-events-none"
                    style={{ opacity: blurEndOpacity, backdropFilter: `blur(${blurEndOpacity * 10}px)`, WebkitBackdropFilter: `blur(${blurEndOpacity * 10}px)`, willChange: 'opacity, backdrop-filter' }}
                />

                {/* PHONE SECTION ELEMENTS (появляются поверх белого слоя) */}
                


                {/* Phone Image */}
                <img
                    src={phoneImage}
                    alt="Phone"
                    className="absolute z-50 w-[1200px] h-auto object-contain lg:w-[1500px]"
                    style={{
                        left: '50%',
                        top: '50%',
                        opacity: phoneOpacity,
                        transform: `translate(-50%, -50%) scale(${phoneScale})`,
                        willChange: 'transform, opacity',
                    }}
                />

                {/* Friend Logo and Text - Desktop как в phone.jsx */}
                <div 
                    className="absolute z-50 w-80 h-80 flex flex-col items-start justify-start"
                    style={{
                        top: '50%',
                        left: '50%',
                        transformOrigin: 'center center',
                        transform: 'translate(-50%, -50%) translate(-350px, -200px)',
                        opacity: friendLogoOpacity,
                        willChange: 'opacity',
                    }}
                >
                    <img 
                        alt="Friend" 
                        className="w-full p-5" 
                        src={footerLogo}
                        style={{
                            opacity: 1,
                            transform: 'translate(0px, 0%)'
                        }}
                    />
                    <p 
                        className="text-black text-2xl font-light pl-5"
                        style={{
                            opacity: friendTextOpacity,
                            transform: 'translate(0px, 0%)'
                        }}
                    >
                        Ваш новый сосед по комнате ждет.
                    </p>
                </div>

                {/* Order Button and Details - Desktop как в phone.jsx */}
                <div 
                    className="absolute z-50 w-80 h-120 flex flex-col items-start justify-start"
                    style={{
                        top: '50%',
                        left: '50%',
                        transformOrigin: 'center center',
                        transform: 'translate(-50%, -50%) translate(400px, 330px)',
                        opacity: orderButtonOpacity,
                        willChange: 'opacity',
                    }}
                >
                    <button 
                        className="flex items-center justify-center bg-black text-white px-6 py-2 mb-2 rounded-full hover:opacity-50 cursor-pointer gap-2 z-20"
                        style={{
                            opacity: 1,
                            transform: 'translate(0px, 0%)'
                        }}
                    >
                        <p className="text-white font-normal text-xl">Заказать сейчас</p>
                        <img alt="Arrow" className="h-5 w-5" src={arrowRight} />
                    </button>
                    
                    <div 
                        className="flex flex-col text-black items-start my-6 font-light"
                        style={{
                            opacity: productDetailsOpacity,
                            transform: 'translate(0px, 0%)'
                        }}
                    >
                        <p>$129</p>
                        <p>Без подписки</p>
                        <p>1 год гарантии</p>
                        <p>Сделано в Канаде</p>
                    </div>
                    
                    <img 
                        alt="Download on the App Store" 
                        className="cursor-pointer mr-7 mt-2" 
                        src={appStoreBadge}
                        style={{
                            opacity: productDetailsOpacity,
                            transform: 'translate(0px, 0%)'
                        }}
                    />
                </div>

            </div>
        </section>
    );
};

export default FriendPage;