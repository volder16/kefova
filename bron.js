        const URL_APP = "https://script.google.com/macros/s/AKfycbxBa7xtvUwDBepStQsT9BAXLnt9XgFOqqIoa4kHVJ7FHdu7Ca8UB3LxRRupuTLFppIzow/exec";
        const form = document.querySelector("#form");
        const dateInput = document.querySelector('#date-input');
        const today = new Date().toISOString().split('T')[0];
        const orderButton = document.querySelectorAll("#priseButton");

        dateInput.setAttribute('min', today);
        document.getElementById("form").style.display = "none";
        // указываем адрес отправки формы (нужно только в начале примера)
        form.action = URL_APP;
        // вспомогательная функция проверки заполненности формы

        function isFilled(details) {
            const {
                optionsSelect, name, phone, time, data
            } = details;
            if (!name) return false;
            return true;
        }

        form.addEventListener("submit", async(e) => {
            e.preventDefault();

            const form = e.target;

            // собираем данные из элементов формы
            let details = {
                options: form.options.value,
                name: form.name.value,
                phone: form.phone.value,
                time: form.time.value,
                data: form.data.value,
                instagram: form.instagram.value,
            };

            // если поля не заполнены - прекращаем обработку
            if (!isFilled(details)) return;

            // подготавливаем данные для отправки
            let formBody = [];
            for (let property in details) {
                let encodedKey = property;
                let encodedValue = details[property];
                formBody.push(encodedKey + "="  + encodedValue);
            }
            formBody = formBody.join("&");

            console.log(formBody);

            // выполняем отправку данных в Google Apps
            const result = await fetch(URL_APP, {
                    method: "POST",
                     headers: {
                        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                     },
                     cors: "no-cors",
                     body: encodeURI(formBody), 
                })
            .then((res) => res.json())
            .catch((err) => alert("Ошибка!"));

            if (result && result.type === 'success') {
                form.name.value = '';
                form.instagram.value = '';
                form.phone.value = '';
                form.time.value = '';
                form.data.value = '';
                form.options.value = '';
                document.getElementById("form").style.display = "none";
                alert('Спасибо за заявку!')
            }

            if (result && result.type === 'error') {
                alert(`заїбало( ${result.errors}`)
            }
        });
        
        orderButton.forEach(button => {
            button.addEventListener("click", () => {
                form.style.position = "fixed";
                form.style.top = "50%";
                form.style.left = "50%";
                form.style.transform = "translate(-50%, -50%)";
                form.style.display = "block";
            });
        });

        function submitForm() {
            document.getElementById("form").style.display = "none";
        }
