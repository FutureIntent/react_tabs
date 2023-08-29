import { useLayoutEffect, useMemo, useState } from "react";
import useResize from "./useResize";

const useContentHeight = () => {

    const [contentHeight, setContentHeight] = useState<number>(0);

    const [headerHeight, setHeaderHeight] = useState<number>(0);

    const dimensions = useResize();

    const getContentHeight = (): number => (window.innerHeight - headerHeight);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useMemo(() => setContentHeight(getContentHeight), [dimensions, headerHeight]);

    useLayoutEffect(() => {
        setHeaderHeight(window.document.getElementById('header')?.getBoundingClientRect().height || 0);
    }, [dimensions]);

    return contentHeight;
}

export default useContentHeight;