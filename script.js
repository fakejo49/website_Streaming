const formLogin = document.getElementById("form-login");
const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");
const pesanLogin = document.getElementById("pesan-login");

if (formLogin) {
  formLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = inputUsername.value.trim();
    const password = inputPassword.value;

    if (username === "admin" && password === "admin123") {
      pesanLogin.textContent = "";
      window.location.href = "pages/home.html";
      return;
    }

    pesanLogin.textContent = "Login gagal! Username atau kata sandi salah.";
  });
}
