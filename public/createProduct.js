function createProductPage(href) {
    var productDiv;
    productDiv = `<div id="product">
<h1>Product Store</h1>
        <h2>Quality Guaranteed</h2>
        <p id="TeaTree">
            I want to make sure that you have the best products available to you.
            I sell many of the Paul Mitchell products including their luxury lines.
            Paul Mitchell is a company that will always be only in the professional
            market so you can be assured of their quality.
        </p>
        <h2>Luxury Lines</h2>
        <h3>Tea Tree</h3>
        <p>
            This Line of products cools and refreshes your hair and scalp. There is
            a slight tingling sensation from all the product. The Tea Tree Special
            products clean the hair of all impurities, the Lemon Sage adds volume
            and the Lavender Mint products add extra moisture to dry hair and skin.
        </p>
        <div class="product-item col-12">
            <div class="col-3">
                <img class="product-image" src="images/Tea-Tree-Special-Shampoo.JPG">
            </div>
            <div class="product-spec col-9 left">
                <h5>Tea Tree Special: Shampoo</h5>
                10.14 oz<br />
                $15<br />
                <button onclick="addToCart('Tea Tree Special: Shampoo' , 15, 'images/Tea-Tree-Special-Shampoo.JPG')">
                    Add to Cart
                </button><br />
            </div>
        </div>
        <div class="product-item col-12">
            <div class="product-spec col-9 right">
                <h5>Tea Tree Special: Conditioner</h5>
                16.9 oz<br />
                $20<br />
                <button onclick="addToCart('Tea Tree Special: Conditioner' , 20, 'images/Tea-Tree-Special-Conditioner.JPG')">
                    Add to Cart
                </button><br />
            </div>
            <div class="col-3">
                <img class="product-image" src="images/Tea-Tree-Special-Conditioner.JPG">
            </div>
        </div>
        <div class="product-item col-12">
            <div class="col-3">
                <img class="product-image" src="images/Tea-Tree-Special-Hair-and-Scalp-Treatment.JPG">
            </div>
            <div class="product-spec col-9 left">
                <h5>Tea Tea Tree Special: Hair and Scalp Treatment</h5>
                16.9 oz<br />
                $20<br />
                <button onclick="addToCart('Tea Tea Tree Special: Hair and Scalp Treatment' , 20, 'images/Tea-Tree-Special-Hair-and-Scalp-Treatment.JPG')">
                    Add to Cart
                </button><br />
            </div>
        </div>
        <div class="product-item col-12">
            <div class="product-spec col-9 right">
                <h5>Tea Tree Special: Body Bar</h5>
                5.3 oz<br />
                $9<br />
                <button onclick="addToCart('Tea Tree Special: Body Bar' , 9, 'images/Tea-Tree-Special-Body-Bar.JPG')">
                    Add to Cart
                </button><br />
            </div>
            <div class="col-3">
                <img class="product-image" src="images/Tea-Tree-Special-Body-Bar.JPG">
            </div>
        </div>
        <div class="product-item col-12">
            <div class="col-3">
                <img class="product-image" src="images/Tea-Tree-Special-Aromatic-Oil.JPG">
            </div>
            <div class="product-spec col-9 left">
                <h5>Tea Tree Special: Aromatic Oil</h5>
                0.35 oz<br />
                $10<br />
                <button onclick="addToCart('Tea Tree Special: Aromatic Oil' , 10, 'images/Tea-Tree-Special-Aromatic-Oil.JPG')">
                    Add to Cart
                </button><br />
            </div>
        </div>
        <div class="product-item col-12">
            <div class="product-spec col-9 right">
                <h5>Lemon Sage: Shampoo</h5>
                10.14 oz<br />
                $15<br />
                <button onclick="addToCart('Lemon Sage: Shampoo' , 15, 'images/Lemon-Sage-Shampoo.JPG')">
                    Add to Cart
                </button><br />
            </div>
            <div class="col-3">
                <img class="product-image" src="images/Lemon-Sage-Shampoo.JPG">
            </div>
        </div>
        <div class="product-item col-12">
            <div class="col-3">
                <img class="product-image" src="images/Lemon-Sage-Conditioner.PNG">
            </div>
            <div class="product-spec col-9 left">
                <h5>Lemon Sage: Conditioner</h5>
                10.14 oz<br />
                $15<br />
                <button onclick="addToCart('Lemon Sage: Conditioner' , 15, 'images/Lemon-Sage-Conditioner.PNG')">
                    Add to Cart
                </button><br />
            </div>
        </div>
        <div class="product-item col-12">
            <div class="product-spec col-9 right">
                <h5>Lavender Mint: Moisturizing Shampoo</h5>
                10.14 oz<br />
                $15<br />
                <button onclick="addToCart('Lavender Mint: Moisturizing Shampoo' , 15, 'images/Lavender-Mint-Moisturizing-Shampoo.JPG')">
                    Add to Cart
                </button><br />
            </div>
            <div class="col-3">
                <img class="product-image" src="images/Lavender-Mint-Moisturizing-Shampoo.JPG">
            </div>
        </div>
        <div class="product-item col-12">
            <div class="col-3">
                <img class="product-image" src="images/Lavender-Mint-Moisturizing-Conditioner.JPG">
            </div>
            <div class="product-spec col-9 left">
                <h5>Lavender Mint: Moisturizing Conditioner</h5>
                10.14 oz<br />
                $15<br />
                <button onclick="addToCart('Lavender Mint: Moisturizing Conditioner' , 15, 'images/Lavender-Mint-Moisturizing-Conditioner.JPG')">
                    Add to Cart
                </button><br />
            </div>
        </div>
        <div class="product-item col-12">
            <div class="product-spec col-9 right">
                <h5>Lavender Mint: Conditioning Leave-In Spray</h5>
                6.8 oz<br />
                $18<br />
                <button  id="MarulaOil" onclick="addToCart('Lavender Mint: Conditioning Leave-In Spray' , 18, 'images/Lavender-Mint-Conditioning-Leave-In-Spray.JPG')">
                    Add to Cart
                </button><br />
            </div>
            <div class="col-3">
                <img class="product-image" src="images/Lavender-Mint-Conditioning-Leave-In-Spray.JPG">
            </div>
        </div>
        <h3>MarulaOil</h3>
        <p>
            This color safe shampoo replenishes hair with needed oils and helps
            to protect hair against damage from heat and chemicals. The new
            MarulaOil Light is for those with fine hair that could be weighed down
            by the regular MarulaOil products.
        </p>
        <div class="product-item col-12">
            <div class="col-3">
                <img class="product-image" src="images/MarulaOil-Rare-Oil-Replenishing-Shampoo.PNG">
            </div>
            <div class="product-spec col-9 left">
                <h5>MarulaOil: Rare Oil Replenishing Shampoo</h5>
                7.5 oz<br />
                $20<br />
                <button onclick="addToCart('MarulaOil: Rare Oil Replenishing Shampoo' , 20, 'images/MarulaOil-Rare-Oil-Replenishing-Shampoo.PNG')">
                    Add to Cart
                </button><br />
            </div>
        </div>
        <div class="product-item col-12">
            <div class="product-spec col-9 right">
                <h5>MarulaOil: Rare Oil Replenishing Conditioner</h5>
                7.5 oz<br />
                $25<br />
                <button onclick="addToCart('MarulaOil: Rare Oil Replenishing Conditioner' , 25, 'images/MarulaOil-Rare-Oil-Replenishing-Conditioner.PNG')">
                    Add to Cart
                </button><br />
            </div>
            <div class="col-3">
                <img class="product-image" src="images/MarulaOil-Rare-Oil-Replenishing-Conditioner.PNG">
            </div>
        </div>
        <div class="product-item col-12">
            <div class="col-3">
                <img class="product-image" src="images/MarulaOil-Light-Rare-Oil-Volumizing-Shampoo.PNG">
            </div>
            <div class="product-spec col-9 left">
                <h5>MarulaOil Light: Rare Oil Volumizing Shampoo</h5>
                24 oz<br />
                $20<br />
                <button onclick="addToCart('MarulaOil Light: Rare Oil Volumizing Shampoo' , 20, 'images/MarulaOil-Light-Rare-Oil-Volumizing-Shampoo.PNG')">
                    Add to Cart
                </button><br />
            </div>
        </div>
        <div class="product-item col-12">
            <div class="product-spec col-9 right">
                <h5>MarulaOil Light: Rare Oil Volumizing Conditioner</h5>
                7.5 oz<br />
                $25<br />
                <button  id="Awapuhi" onclick="addToCart('MarulaOil Light: Rare Oil Volumizing Conditioner' , 25, 'images/MarulaOil-Light-Rare-Oil-Volumizing-Conditioner.PNG')">
                    Add to Cart
                </button><br />
            </div>
            <div class="col-3">
                <img class="product-image" src="images/MarulaOil-Light-Rare-Oil-Volumizing-Conditioner.PNG">
            </div>
        </div>
        <h3>Awapuhi</h3>
        <p>
            The Awapuhi products help to Repair heat and chemically damaged skin.
            Paul Mitchell makes these products with awapuhi from their own farm on
            one of the Hawaii islands.
        </p>
        <div class="product-item col-12">
            <div class="col-3">
                <img class="product-image" src="images/Awapuhi-Wild-Ginger-Repair-Moisturizing-Lather-Shampoo.JPG">
            </div>
            <div class="product-spec col-9 left">
                <h5>Awapuhi Wild Ginger Repair: Moisturizing Lather Shampoo</h5>
                8.5 oz<br />
                $15<br />
                <button onclick="addToCart('Awapuhi Wild Ginger Repair: Moisturizing Lather Shampoo' , 15, 'images/Awapuhi-Wild-Ginger-Repair-Moisturizing-Lather-Shampoo.JPG')">
                    Add to Cart
                </button><br />
            </div>
        </div>
        <div class="product-item col-12">
            <div class="product-spec col-9 right">
                <h5>Awapuhi Wild Ginger Repair: Keratin Cream Rinse</h5>
                8.5 oz<br />
                $15<br />
                <button onclick="addToCart('Awapuhi Wild Ginger Repair: Keratin Cream Rinse' , 15, 'images/Awapuhi-Wild-Ginger-Repair-Keratin-Cream-Rinse.JPG')">
                    Add to Cart
                </button><br />
            </div>
            <div class="col-3">
                <img class="product-image" src="images/Awapuhi-Wild-Ginger-Repair-Keratin-Cream-Rinse.JPG">
            </div>
        </div>
        <div class="product-item col-12">
            <div class="col-3">
                <img class="product-image" src="images/Awapuhi-Wild-Ginger-Repair-Keratin-Intensive-Treatment.PNG">
            </div>
            <div class="product-spec col-9 left">
                <h5>Awapuhi Wild Ginger Repair: Keratin Intensive Treatment</h5>
                5.1 oz<br />
                $20<br />
                <button  id="Strength" onclick="addToCart('Awapuhi Wild Ginger Repair: Keratin Intensive Treatment' , 20, 'images/Awapuhi-Wild-Ginger-Repair-Keratin-Intensive-Treatment.PNG')">
                    Add to Cart
                </button><br />
            </div>
        </div>


        <h2>Basic Needs</h2>
        <h3>Strength</h3>
        <p>
            The sad truth is that there are so many things that can damage and
            weaken hair. The Strength products help to give your hair the nutrients
            it needs to hold up against everything that could damage it.
        </p>
        <div class="product-item col-12">
            <div class="col-3">
                <img class="product-image" src="images/Strength-Super-Strong-Shampoo.JPG">
            </div>
            <div class="product-spec col-9 left">
                <h5>Strength: Super Strong Shampoo</h5>
                10.14 oz<br />
                $15<br />
                <button onclick="addToCart('Strength: Super Strong Shampoo' , 15, 'images/Strength-Super-Strong-Shampoo.JPG')">
                    Add to Cart
                </button><br />
            </div>
        </div>
        <div class="product-item col-12">
            <div class="product-spec col-9 right">
                <h5>Strength: Super Strong Conditioner</h5>
                10.14 oz<br />
                $15<br />
                <button  id="ColorCare" onclick="addToCart('Strength: Super Strong Conditioner' , 15, 'images/Strength-Super-Strong-Conditioner.JPG')">
                    Add to Cart
                </button><br />
            </div>
            <div class="col-3">
                <img class="product-image" src="images/Strength-Super-Strong-Conditioner.JPG">
            </div>
        </div>
        <h3>Color Care</h3>
        <p>
            Even though hair color and lightener have come a long way over the
            years they still cause damage to your hair. Nothing should keep you
            from the look you want. The Color Care products protect your hair from
            damage and also help to prevent the color you chose from fading.
        </p>
        <div class="product-item col-12">
            <div class="col-3">
                <img class="product-image" src="images/Color-Care-Color-Protect-Shampoo.JPG">
            </div>
            <div class="product-spec col-9 left">
                <h5>Color Care: Color Protect Shampoo</h5>
                10.14 oz<br />
                $15<br />
                <button onclick="addToCart('Color Care: Color Protect Shampoo' , 15, 'images/Color-Care-Color-Protect-Shampoo.JPG')">
                    Add to Cart
                </button><br />
            </div>
        </div>
        <div class="product-item col-12">
            <div class="product-spec col-9 right">
                <h5>Color Care: Color Protect Conditioner</h5>
                10.14 oz<br />
                $15<br />
                <button id="Moisture" onclick="addToCart('Color Care: Color Protect Conditioner' , 15, 'images/Color-Care-Color-Protect-Conditioner.JPG')">
                    Add to Cart
                </button><br />
            </div>
            <div class="col-3">
                <img class="product-image" src="images/Color-Care-Color-Protect-Conditioner.JPG">
            </div>
        </div>
        <h3>Moisture</h3>
        <p>
            Dry hair and scalp is one of the most common problems that people have.
            These products are designed to give back the much needed moisture.
        </p>
        <div class="product-item col-12">
            <div class="col-3">
                <img class="product-image" src="images/Moisture-Instant-Moisture-Shampoo.JPG">
            </div>
            <div class="product-spec col-9 left">
                <h5>Moisture: Instant Moisture Shampoo</h5>
                10.14 oz<br />
                $15<br />
                <button onclick="addToCart('Moisture: Instant Moisture Shampoo' , 15, 'images/Moisture-Instant-Moisture-Shampoo.JPG')">
                    Add to Cart
                </button><br />
            </div>
        </div>
        <div class="product-item col-12">
            <div class="product-spec col-9 right">
                <h5>Moisture: Instant Moisture Treatment</h5>
                6.8 oz<br />
                $10<br />
                <button onclick="addToCart('Moisture: Instant Moisture Treatment' , 10, 'images/Moisture-Instant-Moisture-Treatment.JPG')">
                    Add to Cart
                </button><br />
            </div>
            <div class="col-3">
                <img class="product-image" src="images/Moisture-Instant-Moisture-Treatment.JPG">
            </div>
        </div>
        <div class="product-item col-12">
            <div class="col-3">
                <img class="product-image" src="images/Moisture-Awapuhi-Moisture-Mist.JPG">
            </div>
            <div class="product-spec col-9 left">
                <h5>Moisture: Awapuhi Moisture Mist</h5>
                16.9 oz<br />
                $20<br />
                <button id="Kids" onclick="addToCart('Moisture: Awapuhi Moisture Mist' , 20, 'images/Moisture-Awapuhi-Moisture-Mist.JPG')">
                    Add to Cart
                </button><br />
            </div>
        </div>
        <h3>Kids</h3>
        <p>
            These carefully made products are designed for kids, which have
            more delicate scalps. The shampoo will not sting if it happens to
            run into their eyes and the detangler works wonders on knotted hair.
        </p>
        <div class="product-item col-12">
            <div class="col-3">
                <img class="product-image" src="images/Kids-Baby-Dont-Cry-Shampoo.JPG">
            </div>
            <div class="product-spec col-9 left">
                <h5>Kids: Baby Don't Cry Shampoo</h5>
                10.14 oz<br />
                $10<br />
                <button onclick="addToCart('Kids: Baby Don’t Cry Shampoo' , 10, 'images/Kids-Baby-Dont-Cry-Shampoo.JPG')">
                    Add to Cart
                </button><br />
            </div>
        </div>
        <div class="product-item col-12">
            <div class="product-spec col-9 right">
                <h5>Kids: Taming Spray</h5>
                8.5 oz<br />
                $8<br />
                <button  id="Curls" onclick="addToCart('Kids: Taming Spray' , 8, 'images/Kids-Taming-Spray.JPG')">
                    Add to Cart
                </button><br />
            </div>
            <div class="col-3">
                <img class="product-image" src="images/Kids-Taming-Spray.JPG">
            </div>
        </div>
        <h3>Curls</h3>
        <p>
            The Curls line is made for those with natural curl. These products help
            to make the curls manageable and reduce frizz. They also are a great
            help with separating the curls for a beach wave style or classic style.
        </p>
        <div class="product-item col-12">
            <div class="col-3">
                <img class="product-image" src="images/Curls-Spring-Loaded-Frizz-Fighting-Shampoo.JPG">
            </div>
            <div class="product-spec col-9 left">
                <h5>Curls: Spring Loaded Frizz-Fighting Shampoo</h5>
                8.5 oz<br />
                $12<br />
                <button onclick="addToCart('Curls: Spring Loaded Frizz-Fighting Shampoo' , 12, 'images/Curls-Spring-Loaded-Frizz-Fighting-Shampoo.JPG')">
                    Add to Cart
                </button><br />
            </div>
        </div>
        <div class="product-item col-12">
            <div class="product-spec col-9 right">
                <h5>Curls: Spring Loaded Frizz-Fighting Conditioner</h5>
                6.8 oz<br />
                $10<br />
                <button onclick="addToCart('Curls: Spring Loaded Frizz-Fighting Conditioner' , 10, 'images/Curls-Spring-Loaded-Frizz-Fighting-Conditioner.JPG')">
                    Add to Cart
                </button><br />
            </div>
            <div class="col-3">
                <img class="product-image" src="images/Curls-Spring-Loaded-Frizz-Fighting-Conditioner.JPG">
            </div>
        </div>
        <div class="product-item col-12">
            <div class="col-3">
                <img class="product-image" src="images/Curls-Twirl-Around.JPG">
            </div>
            <div class="product-spec col-9 left">
                <h5>Curls: Twirl Around</h5>
                5.1 oz<br />
                $12<br />
                <button id="NeuroLiquid" onclick="addToCart('Curls: Twirl Around' , 12, 'images/Curls-Twirl-Around.JPG')">
                    Add to Cart
                </button><br />
            </div>
        </div>
        <h3>Neuro Liquid</h3>
        <p>
            Neuro Liquid product are specially designed to protect hair from
            thermal damage that happens with regular use of heat styling, such
            as the use of hair dryers, curlers, flatterers, etc.
        </p>
        <div class="product-item col-12">
            <div class="col-3">
                <img class="product-image" src="images/Neuro-Liquid-Protect.PNG">
            </div>
            <div class="product-spec col-9 left">
                <h5>Neuro Liquid: Protect</h5>
                6 oz<br />
                $15<br />
                <button onclick="addToCart('Neuro Liquid: Protect' , 15, 'images/Neuro-Liquid-Protect.PNG')">
                    Add to Cart
                </button><br />
            </div>
        </div>
        <div class="product-item col-12">
            <div class="product-spec col-9 right">
                <h5>Neuro Liquid: Prime</h5>
                4.7 oz<br />
                $12<br />
                <button id="Invisiblewear" onclick="addToCart('Neuro Liquid: Prime' , 12, 'images/Neuro-Liquid-Prime.PNG')">
                    Add to Cart
                </button><br />
            </div>
            <div class="col-3">
                <img class="product-image" src="images/Neuro-Liquid-Prime.PNG">
            </div>
        </div>
        <h2>Styling Needs</h2>
        <h3>Invisiblewear</h3>
        <p>
            Invisiblewear is designed to look natural and bring out the natural
            beauty of the hair. This is mainly used for natural hair styles and it
            often used for the "messy" look.
        </p>
        <div class="product-item col-12">
            <div class="col-3">
                <img class="product-image" src="images/Invisiblewear-Boomerang-Restyling-Mist.JPG">
            </div>
            <div class="product-spec col-9 left">
                <h5>Invisiblewear: Boomerang Restyling Mist</h5>
                8.5 oz<br />
                $12<br />
                <button id="Smoothing" onclick="addToCart('Invisiblewear: Boomerang Restyling Mist' , 12, 'images/Invisiblewear-Boomerang-Restyling-Mist.JPG')">
                    Add to Cart
                </button><br />
            </div>
        </div>
        <h3>Smoothing</h3>
        <p>
            Super Skinny is one of the most popular of the Paul Mitchell products
            that helps to keep hair shinny, smooth, and manageable.
        </p>
        <div class="product-item col-12">
                <div class="col-3">
                <img class="product-image" src="images/Smoothing-Super-Skinny-Shampoo.JPG">
            </div>
            <div class="product-spec col-9 left">
                <h5>Smoothing: Super Skinny Shampoo</h5>
                10.14 oz<br />
                $15<br />
                <button onclick="addToCart('Smoothing: Super Skinny Shampoo' , 15, 'images/Smoothing-Super-Skinny-Shampoo.JPG')">
                    Add to Cart
                </button><br />
            </div>
        </div>
        <div class="product-item col-12">
            <div class="product-spec col-9 right">
                <h5>Smoothing: Super Skinny Treatment</h5>
                10.14 oz<br />
                $15<br />
                <button onclick="addToCart('Smoothing: Super Skinny Treatment' , 15, 'images/Smoothing-Super-Skinny-Treatment.JPG')">
                    Add to Cart
                </button><br />
            </div>
            <div class="col-3">
                <img class="product-image" src="images/Smoothing-Super-Skinny-Treatment.JPG">
            </div>
        </div>
        <div class="product-item col-12">
            <div class="col-3">
                <img class="product-image" src="images/Smoothing-Super-Skinny-Serum.JPG">
            </div>
            <div class="product-spec col-9 left">
                <h5>Smoothing: Super Skinny Serum</h5>
                5.1 oz<br />
                $15<br />
                <button id="Mitch" onclick="addToCart('Smoothing: Super Skinny Serum' , 15, 'images/Smoothing-Super-Skinny-Serum.JPG')">
                    Add to Cart
                </button><br />
            </div>
        </div>
        <h3>Mitch</h3>
        <p>
            This line of product is designed especially for men.
        </p>
        <div class="product-item col-12">
            <div class="col-3">
                <img class="product-image" src="images/Mitch-Hardwired.JPG">
            </div>
            <div class="product-spec col-9 left">
                <h5>Mitch: Hardwired</h5>
                2.5 oz<br />
                $15<br />
                <button onclick="addToCart('Mitch: Hardwired' , 15, 'images/Mitch-Hardwired.JPG')">
                    Add to Cart
                </button><br />
            </div>
        </div>
        <div class="product-item col-12">
            <div class="product-spec col-9 right">
                <h5>Mitch: Reformer</h5>
                3 oz<br />
                $18<br />
                <button onclick="addToCart('Mitch: Reformer' , 18, 'images/Mitch-Reformer.JPG')">
                    Add to Cart
                </button><br />
            </div>
            <div class="col-3">
                <img class="product-image" src="images/Mitch-Reformer.JPG">
            </div>
        </div>
        <div class="product-item col-12">
            <div class="col-3">
                <img class="product-image" src="images/Mitch-Barber-Classic.JPG">
            </div>
            <div class="product-spec col-9 left">
                <h5>Mitch: Barber's Classic</h5>
                3 oz<br />
                $18<br />
                <button onclick="addToCart('Mitch: Barber’s Classic' , 18, 'images/Mitch-Barber-Classic.JPG')">
                    Add to Cart
                </button><br />
            </div>
        </div>
    </div>`;
    document.getElementById('information').innerHTML = productDiv;
    // Update the url
    history.replaceState(null, `Product List`, `/Product-List`);
    // Update the title (the above method doesn't do it anymore)
    document.title = `Product List`;
    // Move the user to the top of the page
    window.location = "#page";
    // If there's a href specified (specific product brand), go to that section on the newly-generated page
    if (href) {
        window.location = href;
    }
}


function addToCart(name, price, picture) {
    var cart = new Array();
    // If there are items in the cart already, make the array equal to them
    if (sessionStorage.getItem('cart')) {
        cart = JSON.parse(sessionStorage.getItem('cart'));
    }
    // Add the next item into the cart
    cart.push({
        name: `${name}`,
        price: price,
        picture: `${picture}`
    });
    // Set it to the session, labeled 'cart'
    sessionStorage.setItem('cart', JSON.stringify(cart));
    // Update the number of items in cart display in navbar
    updateCartIcon();
    // Inform the user that the item was successfully added
    alert(`${name}\n$${price}\nAdded to the cart!`);
}