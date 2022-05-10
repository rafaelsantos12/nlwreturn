import { CloseButton } from "../CloseButton";

import  bugImageUrl from '../../assets/bug.svg'
import  ideaImageUrl from '../../assets/idea.svg'
import  thoughtImageUrl from '../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";

export const feedbackTypes = {
    BUG:{
        title: 'Problemas',
        image:{
            source: bugImageUrl,
            alt: 'Imagemde inseto' 
        }
    },
    IDEA:{ 
        title: 'Ideias',
        image:{
        source: ideaImageUrl,
        alt: 'Imagem de lampada' 
    }},
    OTHER:{ 
        title: 'Outros',
        image:{
        source: thoughtImageUrl,
        alt: 'Imagem de nuvem' 
    }},
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm(){

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const[feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedback(){
        setFeedbackSent(false)
        setFeedbackType(null)
    }

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2x1 
        mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            
           {feedbackSent ? (
               <FeedbackSucessStep
               onFeedbackRestartRequested={handleRestartFeedback}
               />
           ) : 
           (
               <>
            {!feedbackType ? ( 
               <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                    ): 
                (<FeedbackContentStep 
                    feedbackType={feedbackType}
                    onFeedbackRestartRequested={handleRestartFeedback}
                    onFeedbackSuccess={() => setFeedbackSent(true)}
                />)
            }
               </>
           )
           }

            <footer className="text-xs text-neutral-480">
                Feito com ♡ pela <a className="underline underline-offset-2"> Rockeseat </a>
            </footer>
        </div>
    )
}