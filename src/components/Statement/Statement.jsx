import './Statement.css';

const Statement = () => {
    return (
        <section className="flex items-center gap-16 px-24 py-20 bg-white mb-12">
            <div className="w-1/3">
                <img src="./media/statement.jpg" alt="" className="w-full"/>
            </div>
            <div className="w-2/3">
                <h1 id="statement_title" className="text-5xl mb-10">Mission Statement</h1>
                <p>
                    Islam is monotheistic religion teaching that there is only one incomparable God – Allah and that Muhammad is the messenger of God. It is the world’s second-largest religion and the fastest-growing major religion in the world. Islam teaches that God is merciful, all-powerful and unique.
                </p>
                <br />
                <p>
                    Nam facilisis mauris a metus finibus, id gravida velit ornare. Cras neque tortor, faucibus sit amet lacus eu, maximus hendrerit ipsum. Fusce condimentum sem enim, est ornare ex vestibulum ut. Aliquam pulvinar libero vitae dui porttitor, at condimentum dolor eleifend.
                </p>
            </div>
        </section>
    );
};

export default Statement;