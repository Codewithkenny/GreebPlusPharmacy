import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUserCircle, faUserShield } from '@fortawesome/free-solid-svg-icons';
import './Admin.css';

const Admin = () => {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send the product data to the server and save it in the database
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });

            if (response.ok) {
                // Product creation successful
                console.log('Product created!');
                // Reset the form
                setProduct({
                    name: '',
                    price: '',
                    description: '',
                });
            } else {
                // Product creation failed
                console.error('Product creation failed');
            }
        } catch (error) {
            console.error('An error occurred while creating the product:', error);
        }
    };

    return (
        <div>
            <header role="banner">
                <h2>
                    <FontAwesomeIcon icon={faUserShield} />Admin
                </h2>
                <ul className="utilities">
                    <li className="users">
                        <a href="#" className="link-without-underline">
                            <FontAwesomeIcon icon={faUserCircle} /> My Account
                        </a>
                    </li>
                    <li className="logout warn">
                        <a href="#" className="link-without-underline">
                            <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
                        </a>
                    </li>
                </ul>
            </header>

            <nav role="navigation">
                <ul className="main">
                    <li className="dashboard">
                        <a href="admindashboard">Dashboard</a>
                    </li>
                    <li className="edit">
                        <a href="#">Edit Website</a>
                    </li>
                    <li className="write">
                        <a href="#">Write news</a>
                    </li>
                    <li className="comments">
                        <a href="#">Ads</a>
                    </li>
                    <li className="users">
                        <a href="#">Manage Users</a>
                    </li>
                </ul>
            </nav>

            <main role="main">
            
                <section className="panel important">
                    <h2>Add a New Product</h2>
                    <form action="/admin/products" method="post" onSubmit={handleSubmit}>
                        <div className="twothirds">
                            <br />
                            <input type="text" id="title" name="name" size="10" placeholder='Enter Product Name' value={product.name} onChange={handleChange} />
                            <br />
                            <input type="number" id="number" name="price" size="10" placeholder='Enter Product Price' value={product.price} onChange={handleChange} />
                            <br />
                            <textarea name="description" id="description" cols="20" rows="5" placeholder='Description' value={product.description} onChange={handleChange}></textarea>
                            <br />
                            <input type="number" id="quantity" name="quantity" size="10" placeholder='Enter Product quantity' value={product.quantity} onChange={handleChange} />
                            <br />
                            <input type="file" />
                        </div>

                        <input type="submit" name="submit" value="Save" />
                    </form>



                </section>
            </main>
        </div>
    );
};

export default Admin;
