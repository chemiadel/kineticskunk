const PressRelease = ({ image, city, date, title, description, content }) => (
    <main className="main-press">
        <section className="press">
            <div className="press-item">
                <div className="press-item-head">
                    <div className="container">
                        <div className="title">{title}</div>
                        <div className="date">{city} - {date}</div>
                    </div>
                </div>

                <div className="press-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <img src={image} alt="" className="responsive"/>

                                <div className="content" dangerouslySetInnerHTML={{ __html: content }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>
);

export default PressRelease;