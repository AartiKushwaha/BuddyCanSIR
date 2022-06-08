import { Helmet } from "react-helmet"

export default function Translator() {
    const google = window.google
  return (
    <>
      <Helmet>
      <div id="google_translate_element"></div> 
      
      <script type="text/javascript"> 
          function googleTranslateElementInit(){ 
              new google.translate.TranslateElement(
                  {pageLanguage: 'en'}, 
                  'google_translate_element'
              )
}
      </script> 
        <script
          src="https://translate.google.com/translate_a/element.js?
          cb=googleTranslateElementInit"
          async
        ></script>
      </Helmet>
      <div className="App"></div>
    </>
  )
}

