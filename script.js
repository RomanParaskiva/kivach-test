"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const fontSwitcher = document.querySelector('.font-switcher'),
        body = document.body,
        submitBtn = document.querySelector('.submit'),
        userInput = document.querySelector('input[name="username"]'),
        passInput = document.querySelector('input[name="password"]')

  fontSwitcher.addEventListener('click', e => {
    e.preventDefault()

    if (body.classList.contains('verdana')) {
      body.classList.remove('verdana')
      body.classList.add('mont')
    } else {
      body.classList.remove('mont')
      body.classList.add('verdana')
    }
  })

  submitBtn.addEventListener('click', e => {
    // e.preventDefault()

    if (userInput.value == 'admin' && passInput.value == '0000'){
      createNotif('Добро пожаловать в систему!', 'succes')
    } else {
      createNotif('Указаны неверные данные!', 'fail')
    }
  })

  const createNotif = (text, className) => {
    const div = document.createElement('div'),
          classArr = ['notification', 'show']

          classArr.push(className)
    div.classList.add(...classArr)
    div.innerHTML = `
    <div class="close-btn"></div>
      <p>${text}</p>`

    document.body.appendChild(div)

    div.querySelector('.close-btn').addEventListener('click', e => {
      removeNotif(div)
    })

    setTimeout(() => {div.remove()}, 3000)
  }

  const removeNotif = (div) => {
    div.remove()
  }
})

