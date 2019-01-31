var karty = ["o1.png", "o2.png", "o3.png","o4.png","o5.png","o6.png","o1-kopia.png", "o2-kopia.png", "o3-kopia.png","o4-kopia.png","o5-kopia.png","o6-kopia.png"];
var wybrane = [];
var cards = ["o1.png", "o2.png", "o3.png","o4.png","o5.png","o1.png", "o2.png", "o3.png","o6.png","o4.png","o5.png","o6.png", "o2.png", "o3.png","o4.png","o5.png","o1.png", "o2.png", "o3.png","o4.png","o5.png"];

var ilosc=8;
var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;

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
    lock=false;
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

function updateTextInput(num)
{
    ilosc=num;
    $('.score2').html(num);
}

function gra()
{
    //wyswietlanie planszy z kartami
    $('#wybieranie').css('display','none');
    $('.board').css('visibility', 'visible');
    for(var i=0; i<ilosc ;i++)
    {
        $('#c'+i).css('visibility', 'visible');
    }
}
function nowaGra()
{
    //tutaj musisz wstawic resetowanie postepow poprzedniej gry
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