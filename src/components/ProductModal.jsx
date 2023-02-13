import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "./utilities/Modal";

function ProductModal() {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const { title, price, status, maxStock, sizes, image, desc } = {
        title: "Range Rover",
        price: 120,
        status: "IN STOCK",
        maxStock: 10,
        sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
        image: "https://images.unsplash.com/photo-1637859460045-ac3ae9ced99d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZ2UlMjByb3ZlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, eius aspernatur ipsam neque iure sapiente.",
    };

    const handleQuantity = (active) => {
        if (active) {
            setQuantity((prev) => {
                if (prev < maxStock) {
                    return prev + 1;
                } else {
                    return prev;
                }
            });
        } else {
            setQuantity((prev) => {
                if (prev > 1) {
                    return prev - 1;
                } else {
                    return prev;
                }
            });
        }
    };

    const handleCloseModal = () => {
        navigate(-1);
    };

    return (
        <Modal>
            <div className="modal__overlay">
                <div onClick={handleCloseModal} className="modal__close-icon">
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="product__container">
                    <div className="product__color-picker">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="product-image__container">
                        <span className="product__image--efx__0"></span>
                        <span className="product__image--efx__1"></span>
                        <div className="product__image">
                            <div className="img">
                                <img src={image} alt={title.replace(" ", "_")} />
                            </div>
                            <i className="love">❤</i>
                        </div>
                    </div>
                    <div className="product__infomation">
                        <h5 className="product__price">
                            <span>$ </span>
                            <span>{price}</span>
                        </h5>
                        <h2 className="product__title">{title}</h2>
                        <p className="prodcut__description">{desc}</p>
                        <div className="product__status">
                            <p>
                                <span>Status: </span>
                                <span>{status}</span>
                            </p>
                        </div>
                        <div className="product__quantity">
                            <i onClick={() => handleQuantity(false)} className="fa-solid fa-minus"></i>
                            <span>{quantity}</span>
                            <i onClick={() => handleQuantity(true)} className="fa-solid fa-plus"></i>
                        </div>
                        <div className="product__misc">
                            <div className="product__size">
                                <span>Size: </span>
                                <select name="size" id="size" title="Size">
                                    {sizes.map((size) => (
                                        <option key={size} value={size}>
                                            {size}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button type="button" className="product__btn">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ProductModal;
