import { useEffect, useState } from "react";

interface DimensionsInterface {
    width: number,
    height: number
}

const useResize = () => {

    const [dimensions, setDimensions] = useState<DimensionsInterface>({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const resize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    useEffect(() => {
        window.addEventListener('resize', resize);

        return (() => {
            window.removeEventListener('resize', resize);
        });
    })

    return dimensions;
};

export default useResize;