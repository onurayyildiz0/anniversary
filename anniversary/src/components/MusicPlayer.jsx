import { useState, useRef, useEffect } from 'react';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);


    const songUrl = "/perfect.mp3";

    const audioRef = useRef(new Audio(songUrl));


    useEffect(() => {
        audioRef.current.loop = true;
    }, []);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {

            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed bottom-8 right-8 z-50">


            <button
                onClick={togglePlayPause} // Tıklayınca YENİ fonksiyonumuzu çağırıyoruz
                className="bg-linear-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-2xl"
                aria-label="Müzik Çal"
            >
                {isPlaying ? (
                    // Kapatma (X) ikonu
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                ) : (
                    // Müzik notası ikonu
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default MusicPlayer;