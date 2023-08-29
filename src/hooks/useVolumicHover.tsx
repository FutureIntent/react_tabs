import { useEffect } from "react";
import { volumicHover, volumicBlur } from "../animations/tabAnimations";

const useVolumicHover = (wrapperRef: React.RefObject<HTMLDivElement>, contentRef: React.RefObject<HTMLDivElement>) => {
    
    useEffect(() => {

        // workaround for event cleanup purpose
        const hoverTrigger = (event: any) => (!window.matchMedia("(pointer: coarse)").matches && volumicHover(event, contentRef));
        const blurTrigger = () => volumicBlur(contentRef);

        wrapperRef.current?.addEventListener('mousemove', hoverTrigger);
        wrapperRef.current?.addEventListener('mouseleave', blurTrigger);
        
        return () => {
            wrapperRef.current?.removeEventListener('mousemove', hoverTrigger);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            wrapperRef.current?.removeEventListener('mouseleave', blurTrigger);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default useVolumicHover;