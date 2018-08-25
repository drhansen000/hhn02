function createAboutPage() {
    // Insert about information into information div (which is underneath the banner section)
    var aboutDiv;
    aboutDiv = `<div id="about">
                <h1>About Us</h1>
                <h2>Cut & Style</h2>
                <p>
                    You can get a simple trim or try out a new style. I am here to make sure<br />
                    you look your best no matter what you choose to do.
                </p>
            </div>
            <div>
                <h2>Color</h2>
                <p>
                    Both natural and fantasy colors are available. There is temporary color that will
                    fade in a couple weeks if you're unsure what you want. There is also
                    semi-permanent color that will last over and month and permanent color. Only
                    natural colors can be permanent. Depending on the desired look multiple visits
                    may be needed.
                </p>
            </div>
            <div>
                <h2>Deep Condition & Scalp Massage</h2>
                <p>
                    A deep condition and massage is great for rejuvenating your scalp and
                    increasing blood flow, which encourages hair growth. This service is a full hour
                    of pampering that is not only relaxing but very healthy for your hair and scalp.
                </p>
            </div>
            <div>
                <h2>Makeup</h2>
                <p>
                    You can get your prom, wedding, date or other event makeup done. You could
                    come in and get your makeup done simply because you don't feel like doing it
                    yourself that day.
                </p>
            </div>
            <div>
                <h2>Nail</h2>
                <p>
                    Take some time to relax with a manicure, pedicure, or both. You can have your
                    nails painted with gel, matte, or shellac polish. You could also get acrylic nails
                    done with any choice of tip shape.
                </p>
            </div>
            <div>
                <h2>Perm</h2>
                <p>
                    Chemical perms are offered. For small curls the hair needs to be at least 1.5
                    inches long. For large curls the hair needs to be at least 5-6 inches long.
                </p>
            </div>
            <div>
                <h2>Facial</h2>
                <p>
                    For some more relaxation you could get a facial. It is a simple cleansing and
                    moisturizing facial. After the facial you should avoid touching your face and
                    not apply makeup for a few hours.
                </p>
            </div>
            <div>
                <h2>Waxing</h2>
                <p>
                    Face and neck waxing are available. The hair need to be at least 0.25 inches
                    long to be waxed and makeup will be removed from the area to be waxed.
                    The process is quick and there is a cooling and soothing cream that will be
                    applied to the freshly waxed area. The cream lessens the pain, redness, and
                    reduces the chance of acne.
                </p>
            </div>
        </div>`;
    document.getElementById('information').innerHTML = aboutDiv;
    // Update the url
    history.replaceState(null, `About Us`, `/About`);
    // Update the title (the above method doesn't do it anymore)
    document.title = `About Us`;
    // Move the user to the top of the page
    window.location = "#page";
}