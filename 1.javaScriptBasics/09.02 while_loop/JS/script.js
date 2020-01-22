var  a = document.querySelectorAll('a[href^="http"]');
for (var i=0; i<+a.length; i++)
{
    console.log(a[i]);
}
