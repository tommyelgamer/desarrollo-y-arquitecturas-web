window.onload = () => {
  const loginForm = document.getElementById('login-form');


  Array.from(loginForm.getElementsByClassName('form-control')).forEach(input => {
    input.addEventListener('focus', (e) => {
      e.target.classList.remove('is-valid');
      e.target.classList.remove('is-invalid');
    })
  })

  document.getElementById('username').addEventListener('blur', (e) => {
    const element = e.currentTarget;

    console.log({ element })

    const validate = () => {
      return /\S/.test(element.value);
    }

    const isValid = validate();

    isValid ? element.classList.add('is-valid') : element.classList.add('is-invalid');
  })

  document.getElementById('email').addEventListener('blur', (e) => {
    const element = e.currentTarget;

    console.log({ element })

    const validate = () => {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(element.value);
    }

    const isValid = validate();

    isValid ? element.classList.add('is-valid') : element.classList.add('is-invalid');
  })

  document.getElementById('password').addEventListener('blur', (e) => {
    const element = e.currentTarget;

    console.log({ element })

    const validate = () => {
      return /.{8,}/.test(element.value);
    }

    const isValid = validate();

    isValid ? element.classList.add('is-valid') : element.classList.add('is-invalid');
  })

  document.getElementById('edad').addEventListener('blur', (e) => {
    const element = e.currentTarget;

    console.log({ element })

    const validate = () => {
      return /\d/.test(element.value);
    }

    const isValid = validate();

    isValid ? element.classList.add('is-valid') : element.classList.add('is-invalid');
  })

  document.getElementById('cellphone').addEventListener('blur', (e) => {
    const element = e.currentTarget;

    console.log({ element })

    const validate = () => {
      return /\S/.test(element.value);
    }

    const isValid = validate();

    isValid ? element.classList.add('is-valid') : element.classList.add('is-invalid');
  })

  document.getElementById('address').addEventListener('blur', (e) => {
    const element = e.currentTarget;

    console.log({ element })

    const validate = () => {
      return /\S/.test(element.value);
    }

    const isValid = validate();

    isValid ? element.classList.add('is-valid') : element.classList.add('is-invalid');
  })

  document.getElementById('city').addEventListener('blur', (e) => {
    const element = e.currentTarget;

    console.log({ element })

    const validate = () => {
      return /\S/.test(element.value);
    }

    const isValid = validate();

    isValid ? element.classList.add('is-valid') : element.classList.add('is-invalid');
  })

  document.getElementById('postal-code').addEventListener('blur', (e) => {
    const element = e.currentTarget;

    console.log({ element })

    const validate = () => {
      return /\S/.test(element.value);
    }

    const isValid = validate();

    isValid ? element.classList.add('is-valid') : element.classList.add('is-invalid');
  })

  document.getElementById('dni').addEventListener('blur', (e) => {
    const element = e.currentTarget;

    console.log({ element })

    const validate = () => {
      return /\d{7,8}/.test(element.value);
    }

    const isValid = validate();

    isValid ? element.classList.add('is-valid') : element.classList.add('is-invalid');
  })
}