// language files

var lang = navigator.language || navigator.userLanguage;
if (lang.indexOf('de') == 0)
  window.location = '/de/';
else
  window.location = '/en/';
