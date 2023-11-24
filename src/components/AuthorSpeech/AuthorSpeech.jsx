import './AuthorSpeech.css';

const AuthorSpeech = () => {
    return (
        <section
            id='author_section'
            className="bg-[url('/media/author_section_bg.jpg')] bg-no-repeat bg-right-bottom bg-conver flex items-center mx-auto px-24 mb-12">
            <div id="author_speech" className="w-1/2">
                <p>Assalaamu Alaikum:</p>
                <p className="py-8">
                    Thank you for visiting the Islamic Center website. The ICA is located in Antelope and is one of the first mosques in California. The ICA is not only a mosque, it is also a community center. I invite you to visit us and discover the beauty of our Center. This will give you an opportunity to meet our diverse and friendly community represented by dozens of different ethnicities. Hope to see you soon at our center!
                </p>
                <p>Dani Waleed Aswad, <span className="text-yellow-500">Director</span></p>
            </div>
            <div id="author_image" className="w-1/2">
                <img src="./media/author.jpg" alt="" />
            </div>
        </section>
    );
};

export default AuthorSpeech;