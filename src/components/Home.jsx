import Unsplash from "../assets/freestocks-_3Q3tsJ01nc-unsplash.jpg";
import WHBag from "../assets/women_hand-bag.png";

const products = [
    {
        id: 1,
        image: WHBag,
        title: "Women Hand Bag",
        description: "Women Hand Bag",
        price: 100,
        rating: 4.5,
        numReviews: 10,
    },
    {
        id: 2,
        image: WHBag,
        title: "Women Hand Bag",
        description: "Women Hand Bag",
        price: 100,
        rating: 4.5,
        numReviews: 10,
    },
    {
        id: 3,
        image: WHBag,
        title: "Women Hand Bag",
        description: "Women Hand Bag",
        price: 100,
        rating: 4.5,
        numReviews: 10,
    },
    {
        id: 4,
        image: WHBag,
        title: "Women Hand Bag",
        description: "Women Hand Bag",
        price: 100,
        rating: 4.5,
        numReviews: 10,
    },
    {
        id: 5,
        image: WHBag,
        title: "Women Hand Bag",
        description: "Women Hand Bag",
        price: 100,
        rating: 4.5,
        numReviews: 10,
    },
    {
        id: 6,
        image: WHBag,
        title: "Women Hand Bag",
        description: "Women Hand Bag",
        price: 100,
        rating: 4.5,
        numReviews: 10,
    },
    {
        id: 7,
        image: WHBag,
        title: "Women Hand Bag",
        description: "Women Hand Bag",
        price: 100,
        rating: 4.5,
        numReviews: 10,
    },
];

function Home() {
    return (
        <main>
            <div className="i-hero">
                <div className="i-hero__heading">
                    <h1>Shop your favorite products with iShop and Get 50% off from $250 and up.</h1>
                    <div className="btn">
                        <button type="button" className="btn__explore">
                            Explore
                        </button>
                        <button type="button" className="btn__signup">
                            Signup
                        </button>
                    </div>
                </div>
                <div className="i-hero__img">
                    <img src={Unsplash} alt="" />
                </div>
            </div>
            <section className="product-section">
                <div className="product__head">
                    <h3 className="featured-product-title">Featured Products</h3>
                </div>
                <div className="product__body">
                    {products.map((product) => (
                        <div key={product.id} className="product-item">
                            <img src={product.image} alt={product.title} className="product-img" />
                            <div className="product-description">
                                <div className="desc">
                                    <span className="price">$ {product.price.toFixed(2)} </span>
                                    <span>
                                        <i className="fa-solid fa-heart"></i>
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-cart-plus"></i>
                                    </span>
                                </div>
                                <h6 className="product-title">{product.title}</h6>
                                <span className="product-info">click for more</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section id="contact" className="about-us">
                <div className="about-us__img">
                    <img src="cart_with_woman.png" alt="" />
                </div>
                <div className="about-us__container">
                    <div className="visit-us">
                        <div className="visit-us__container">
                            <h3>Visit Us</h3>
                            <div>
                                <p>609 Harter Street</p>
                                <p>Bellefontaine</p>
                            </div>
                            <div>
                                <p>OH, Ohio</p>
                                <p>43311</p>
                            </div>
                            <div>
                                <p>937-599-9255</p>
                                <p>info@ishop.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-us__bar"></div>
                    <div className="write-us__container">
                        <h3>Write Us</h3>
                        <form className="form" action="">
                            <div className="form-input">
                                <label for="fullname">Name:</label>
                                <input type="text" title="Full Name" name="fullname" />
                            </div>
                            <div className="form-input">
                                <label for="email">Email:</label>
                                <input type="text" title="Email" name="email" />
                            </div>
                            <div className="form-textarea">
                                <label for="message">Message:</label>
                                <textarea type="text" title="Email" name="message"></textarea>
                            </div>
                            <div className="submit-btn">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
