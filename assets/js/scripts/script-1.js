// language files

var lang = navigator.language || navigator.userLanguage;
if (lang.indexOf('fr') == 0)
  window.location = '/fr/';
else
  window.location = '/en/';
