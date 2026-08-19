 const services = [
            {
                name: "Wash And Fold",
                description: "Professional washing and folding service.",
                price: 140,
                image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=700&q=80"
            },
            {
                name: "Dry Cleaning",
                description: "Premium dry cleaning for your clothes.",
                price: 200,
                image: "https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?auto=format&fit=crop&w=700&q=80"
            },
            {
                name: "Ironing",
                description: "Professional ironing service for wrinkle-free clothes.",
                price: 80,
                image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80"
            },
            {
                name: "Wash And Iron",
                description: "Complete washing and ironing service.",
                price: 180,
                image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=700&q=80"
            },
            {
                name: "Blanket Cleaning",
                description: "Deep cleaning service for blankets and large clothes.",
                price: 300,
                image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80"
            }
        ];

        let currentService = 0;
        let cart = [];

        function loadService() {
            const service = services[currentService];

            document.getElementById("serviceName").textContent = service.name;
            document.getElementById("servicePrice").textContent =
                "₹" + service.price.toFixed(2);

            document.getElementById("serviceDescription").textContent =
                service.description;

            document.getElementById("serviceImage").src = service.image;

           
        }

        function skipService() {
            currentService++;

            if (currentService >= services.length) {
                currentService = 0;
            }

            loadService();
        }

        function addItem() {
            cart.push(services[currentService]);

            updateCart();

            currentService++;

            if (currentService >= services.length) {
                currentService = 0;
            }

            loadService();
        }

        function updateCart() {
            const cartItems = document.getElementById("cartItems");

            cartItems.innerHTML = "";

            let total = 0;

            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <tr>
                        <td colspan="3" class="empty-message">
                            No items added
                        </td>
                    </tr>
                `;
            }

            cart.forEach((item, index) => {
                total += item.price;

                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td>₹${item.price.toFixed(2)}</td>
                `;

                cartItems.appendChild(row);
            });

            document.getElementById("totalAmount").textContent =
                "₹" + total.toFixed(2);
        }

        function removeItem(index) {
            cart.splice(index, 1);
            updateCart();
        }

        document.getElementById("bookingForm").addEventListener("submit", function (event) {
            event.preventDefault();

            if (cart.length === 0) {
                alert("Please add at least one service.");
                return;
            }

            const name = document.getElementById("fullName").value;

            document.getElementById("thankYouMessage").textContent =
                "Thank you " + name + " for contacting us!";

            document.getElementById("thankYouMessage").style.display = "block";

            this.reset();
        });
        function logout() {
            alert("You have been logged out.");
        }

        loadService();
        updateCart();