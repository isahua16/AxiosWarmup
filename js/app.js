function get_advice(event)
{
    if(document.querySelector(`#msg`))
    {
        document.querySelector(`#msg`).remove();
    }
    
    axios.request(
        {
            url: `https://api.adviceslip.com/advice`
        }
    ).then(advice_success).catch(advice_fail);
}

function advice_success(res)
{
        advice_section.insertAdjacentHTML(`beforeend`, `<p id="msg">${res[`data`][`slip`][`advice`]}</p>`)
}

function advice_fail(err)
{
    advice_section.insertAdjacentHTML(`beforeend`, `<p id="msg">${err[`message`]}</p>`)
}

function roll_dice(event)
{

    if(document.querySelector(`#api_element`))
    {
        document.querySelector(`#api_element`).remove();
    }

    axios.request(
        {
            url: `https://api.dicebear.com/6.x/pixel-art/json`
        }
    ).then(roll_dice_success).catch(roll_dice_fail);
}

function roll_dice_success(res)
{
    dice_section.insertAdjacentHTML(`beforeend`, `<span id="api_element">${res[`data`][`svg`]}</span>`);
}

function roll_dice_fail(err)
{
    dice_section.insertAdjacentHTML(`beforeend`, `<p id="api_element">${err[`message`]}</p>`);
}

function get_data(event)
{
    axios.request(
        {
            url: `https://random-data-api.com/api/v2/users?size=10&response_type=json`
        }
    ).then(get_data_success).catch(get_data_fail);
}

function get_data_success(res)
{
    for(let i = 0; i < res[`data`].length; i++)
    {
        data_section.insertAdjacentHTML(`beforeend`, 
        `<article class="user_card">
            <img width="50px" src="${res[`data`][i][`avatar`]}">
            <h3>${res[`data`][i][`first_name`]} ${res[`data`][i][`last_name`]}</h3>
            <p>${res[`data`][i][`employment`][`title`]}</p>
            <p>${res[`data`][i][`email`]}</p>
        </article>`);
    }
}

function get_data_fail(err)
{
    console.log(err);
}

let btn = document.querySelector(`#btn`);
btn.addEventListener(`click`, get_advice);
let advice_section = document.querySelector(`#advice`);

let btn2 = document.querySelector(`#btn2`);
btn2.addEventListener(`click`, roll_dice);
let dice_section = document.querySelector(`#dice`);

let btn3 = document.querySelector(`#btn3`);
btn3.addEventListener(`click`, get_data);
let data_section = document.querySelector(`#data`);