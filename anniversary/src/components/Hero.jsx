import { useState, useEffect } from 'react';

const Hero = () => {
    // 🎉 8 Kasım 2024 - Sevgili olduğumuz gün 💕
    const startDate = new Date('2024-11-08');

    const [timeElapsed, setTimeElapsed] = useState({
        years: 0,
        months: 0,
        days: 0,
        totalDays: 0
    });

    useEffect(() => {
        const calculateTime = () => {
            const now = new Date();

            // Bugünün başlangıcı (saat 00:00:00)
            const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

            // Başlangıç tarihinin başlangıcı (saat 00:00:00)
            const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());

            // Toplam gün sayısı
            const diffTime = today - start;
            const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

            // Yıl, ay, gün hesaplama
            let years = today.getFullYear() - start.getFullYear();
            let months = today.getMonth() - start.getMonth();
            let days = today.getDate() - start.getDate();

            if (days < 0) {
                months--;
                const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
                days += lastMonth.getDate();
            }

            if (months < 0) {
                years--;
                months += 12;
            }

            setTimeElapsed({
                years,
                months,
                days,
                totalDays
            });
        };

        calculateTime();
        // Her gece yarısı güncellemek için interval
        const interval = setInterval(calculateTime, 60000); // Her dakika kontrol et

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 relative overflow-hidden">
            {/* Animated hearts background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-float-heart text-pink-300 opacity-20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            fontSize: `${Math.random() * 30 + 20}px`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 10 + 10}s`
                        }}
                    >
                        ❤️
                    </div>
                ))}
            </div>

            <div className="text-center z-10 px-4">
                <h1 className="text-6xl md:text-8xl font-dancing text-pink-600 mb-4 animate-fade-in">
                    Bizim Hikayemiz
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 mb-8 font-poppins animate-fade-in-delay">
                    Her an seninle daha özel 💕
                </p>

                <div style={{ marginTop: '20px' }} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8  md:p-12 max-w-4xl mx-auto animate-scale-in">
                    <h2 className="text-3xl md:text-4xl font-dancing text-pink-500 mb-6">
                        Birlikte Geçirdiğimiz Zaman
                    </h2>

                    <div style={{ gap: '8px' }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 transform hover:scale-105 transition-transform">
                            <div className="text-5xl md:text-6xl font-bold text-pink-600 font-poppins">
                                {timeElapsed.years}
                            </div>
                            <div className="text-gray-600 mt-3 font-poppins text-lg">Yıl</div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 transform hover:scale-105 transition-transform">
                            <div className="text-5xl md:text-6xl font-bold text-purple-600 font-poppins">
                                {timeElapsed.months}
                            </div>
                            <div className="text-gray-600 mt-3 font-poppins text-lg">Ay</div>
                        </div>

                        <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 transform hover:scale-105 transition-transform">
                            <div className="text-5xl md:text-6xl font-bold text-pink-600 font-poppins">
                                {timeElapsed.days}
                            </div>
                            <div className="text-gray-600 mt-3 font-poppins text-lg">Gün</div>
                        </div>
                    </div>

                    <div style={{ paddingTop: '10px', paddingBottom: '10px', marginTop: '10px', marginBottom: '10px' }} className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl p-6">
                        <p className="text-2xl md:text-3xl font-dancing text-gray-700">
                            Toplam <span className="text-pink-600 font-bold">{timeElapsed.totalDays}</span> gündür
                            <br />
                            <span className="text-3xl md:text-4xl">❤️</span> hayatımı güzelleştiriyorsun <span className="text-3xl md:text-4xl">❤️</span>
                        </p>
                    </div>
                </div>

                <div style={{ marginTop: '40px' }} className=" animate-bounce">
                    <p className="text-gray-600 font-poppins">Aşağı kaydır ↓</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
