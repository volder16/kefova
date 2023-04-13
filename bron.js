       const URL_APP = "https://script.google.com/macros/s/AKfycbzqwi9h3USOZIUMabB9IBmD2fumfhJgsHUi0Qq373Q6Ah3pSyoe495sdQzGoe7X7itC2A/exec";
        const form = document.querySelector("#form");
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
        // навешиваем обработчик на отправку формы
        form.addEventListener("submit", async(ev) => {
            // отменяем действие по умолчанию
            ev.preventDefault();
            // получаем ссылки на элементы формы
            const optionsSelect = document.querySelector('select[name="options"]');
            optionsSelect.addEventListener('change', (event) => {
                const selectedOption = event.target.value;
            });
            const name = document.querySelector("[name=name]");
            const instagram = document.querySelector("[name=instagram]");
            const phone = document.querySelector("[name=phone]");
            const time = document.querySelector("[name=time]");
            const data = document.querySelector("[name=data]");
            // собираем данные из элементов формы
            let details = {
                name: name.value.trim()
                , phone: phone.value.charAt()
                ,  instagram: instagram.value.trim()
                , time: time.value
            };
            console.log(optionsSelect, name, phone.value, time, data, instagram.value);
            // если поля не заполнены - прекращаем обработку
            if (!isFilled(details)) return;
            // подготавливаем данные для отправки
            let formBody = [];
            for (let property in details) {
                // кодируем названия и значения параметров
                let encodedKey = encodeURIComponent(property);
                let encodedValue = encodeURIComponent(details[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            // склеиваем параметры в одну строку
            formBody = formBody.join("&");
            // выполняем отправку данных в Google Apps
            const result = await fetch(URL_APP, {
                    method: "POST"
                    , headers: {
                        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                    , }
                    , cors: "no-cors"
                    , body: formBody
                , }).then((res) => res.json()).catch((err) => alert("Ошибка!"))
                // .then((res) => console.log(res));
            if (result && result.type === 'success') {
                name.value = '';
                instagram.value = '';
                phone.value = '';
                time.value = '';
                optionsSelect.value = '';
                document.getElementById("form").style.display = "none";
                alert('Спасибо за заявку!')
            }
            if (result && result.type === 'error') {
                alert(`заїбало( ${result.errors}`)
            }
        });
        const dateInput = document.querySelector('#date-input');
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
        //form
        const orderButton = document.querySelectorAll("#priseButton");
        orderButton.forEach(button => {
            button.addEventListener("click", () => {
                // Center the form on the screen
                form.style.position = "fixed";
                form.style.top = "50%";
                form.style.left = "50%";
                form.style.transform = "translate(-50%, -50%)";
                // Show the form
                form.style.display = "block";
            });
        });

        function submitForm() {
            document.getElementById("form").style.display = "none";
        }
