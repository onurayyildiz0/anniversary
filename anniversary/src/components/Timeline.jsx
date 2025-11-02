import { useState } from 'react';

const Timeline = () => {
    // ÖNEMLİ: Resimlerinizi public klasörüne ekleyin!
    // Örnek: public/1.jpg, public/3.jpg, public/5.jpg gibi
    const [photos] = useState([
        { id: 1, image: "/1.jpg" },
        { id: 2, image: "/3.jpg" },
        { id: 4, image: "/6.jpg" },
        { id: 5, image: "/7.jpg" },
        { id: 6, image: "/8.jpg" },
        { id: 7, image: "/9.jpg" },
        { id: 9, image: "/11.jpg" },
        { id: 10, image: "/12.jpg" },
        { id: 11, image: "/13.jpg" },
        { id: 12, image: "/14.jpg" },
        { id: 13, image: "/15.jpg" },
        { id: 14, image: "/16.jpg" },
        { id: 15, image: "/17.jpg" },
        { id: 16, image: "/18.jpg" },
        { id: 17, image: "/19.jpg" },
        { id: 18, image: "/20.jpg" },
        { id: 19, image: "/21.jpg" },
        { id: 20, image: "/22.jpg" },
        { id: 21, image: "/23.jpg" },
        { id: 22, image: "/24.jpg" },
        { id: 23, image: "/25.jpg" },
        { id: 24, image: "/26.jpg" },
        { id: 25, image: "/27.jpg" },
        { id: 26, image: "/28.jpg" },
        { id: 27, image: "/29.jpg" },
        { id: 28, image: "/30.jpg" },
        { id: 30, image: "/32.jpg" }
    ]);

    return (
        <div className=" h-full bg-linear-to-b from-pink-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="w-screen flex-col  lg:gap-20 mx-auto">
                <h2 className="text-5xl md:text-6xl font-dancing text-center text-pink-600 mb-4 animate-fade-in">
                    Bizim Anlarımız 📸
                </h2>
                <p style={{ marginBottom: '64px' }} className="text-center text-gray-600 font-poppins mb-16 text-lg">
                    Her fotoğraf bir hikaye, her an seninle özel �
                </p>

                {/* Photo Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center px-8">
                    {photos.map((photo) => (
                        <div
                            key={photo.id}
                            className="group animate-fade-in-up w-full max-w-sm"
                        >
                            <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border-2 border-pink-100">
                                {/* Image Container */}
                                <div className="relative overflow-hidden aspect-square">
                                    <img
                                        src={photo.image}
                                        alt={`Fotoğraf ${photo.id}`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                            // Eğer resim yüklenemezse placeholder göster
                                            e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="%23fce7f3"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%23ec4899">Fotoğraf Ekle 💕</text></svg>';
                                        }}
                                    />
                                    {/* Overlay with gradient on hover */}
                                    <div className="absolute inset-0 bg-linear-to-t from-pink-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Love Quote */}
                <div style={{ marginTop: '128px', paddingBottom: '64px' }} className="text-center flex justify-center w-screen animate-fade-in">
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto border-2 border-pink-200" >
                        <p style={{ margin: '12px' }} className="text-3xl md:text-4xl font-dancing text-gray-700 leading-relaxed">
                            "Her fotoğrafta bir anı,
                            <br />
                            her anıda senin gülüşün.
                            <br />
                            <span className="text-pink-500 text-4xl md:text-5xl">Seni çok seviyorum! ❤️</span>"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
