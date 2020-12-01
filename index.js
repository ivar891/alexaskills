const Alexa=require('ask-sdk-core')

const LaunchRequestHandler={
    canHandle(hi){
        return hi.requestEnvelope.request.type=="LaunchRequest"
    },
    handle(hi){
        const speechtext="Welcome!! a quote a day keeps your mind healthy and closer to your goal"
        return hi.responseBuilder.speak(speechText).getResponse()
    } 
}


exports.handler=Alexa.SkillBuilders.custom().addRequestHandler(LaunchRequestHandler).lambda();