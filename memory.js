var wybrane = [];
var cards_all = ["o1.png", "o2.png", "o3.png","o4.png","o5.png","o6.png", "o7.png", "o8.png","o9.png","o10.png","o11.png","o12.png", "o13.png", "o14.png","o15.png"];
var cards = [];

var ilosc=8;
var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var car;
var n=1;

function revealCard(nr)
{
    var opacityValue = $('#c'+nr).css('opacity');

    if(opacityValue!=0 && lock == false)
    {
        lock = true;
        var obraz = "url(pics/" + cards[nr] +")";
        $('#c'+nr).css('background-image', obraz);
        $('#c'+nr).addClass('cardActive');
        $('#c'+nr).removeClass('card');

        if(oneVisible == false)
        {
            oneVisible = true;
            visible_nr = nr;
            lock=false;
        }
        else
        {
            if(visible_nr!=nr)
            {
                if(cards[visible_nr] == cards[nr])
                {
                    setTimeout(function(){hide2Cards(nr, visible_nr)},400);
                }
                else
                {
                    setTimeout(function(){restore2Cards(nr, visible_nr)},600);
                }
        
            turnCounter++;
            $('.score').html('Turn counter: ' + turnCounter);
            oneVisible = false;
            }
            else
            {
                lock=false;
            }

        }
    }
}

function hide2Cards(nr1, nr2)
{
    $('#c'+nr1).css('opacity', '0');
    $('#c'+nr2).css('opacity', '0');
    car-=1;

    lock=false;
    if(car==0)
    {
        var imie = prompt("Koniec gry! Podaj swoje imię:", "");
        if(imie==null || imie=="") imie="Nieznany";
            $('.wyniki').append("<li>"+n+". "+imie+'</li>');
            n++;
    }
}

function restore2Cards(nr1,nr2)
{
    $('#c'+nr1).css('background-image', 'url(pics/sm.png)');
    $('#c'+nr1).addClass('card');
    $('#c'+nr1).removeClass('cardActive');

    $('#c'+nr2).css('background-image', 'url(pics/sm.png)');
    $('#c'+nr2).addClass('card');
    $('#c'+nr2).removeClass('cardActive');

    lock=false;
}

function shuffle(array) 
{   
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) 
    {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
 
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
 
    return array;
}

function updateTextInput(num)
{
    ilosc=num;
    $('.score2').html(num);
}

function gra()
{
    car=ilosc/2;
    for(var j=0; j<ilosc/2;j++)
    {
        cards[j]=cards_all[j];
        cards[j+(ilosc/2)]=cards_all[j];
    }
    shuffle(cards);
    $('#wybieranie').css('display','none');
    $('.board').css('visibility', 'visible');
    for(var i=0; i<ilosc ;i++)
    {
        $('#c'+i).css('visibility', 'visible');
    }
}
function nowaGra()
{
    $('.board').css('visibility', 'hidden');
    for(var i=0; i<ilosc ;i++)
    {
        $('#c'+i).css('background-image', 'url(pics/sm.png)');
        $('#c'+i).addClass('card');
        $('#c'+i).removeClass('cardActive');
        $('#c'+i).css('opacity', '1');
        $('#c'+i).css('visibility', 'hidden');
    }
    turnCounter=0;
    $('.score').html('Turn counter: ' + turnCounter);
    $('#wybieranie').css('display','block');
}

function losowanie()
{
    //wybieranie ktore slodycze beda
    for(var i=0;i<(ilosc/2);i++)
    {
        wybrane[i] = Math.floor(Math.random() * 10); 
    }
}