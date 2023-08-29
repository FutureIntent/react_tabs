export const volumicHover = (event: any, contentRef: React.RefObject<HTMLDivElement>) => {

    contentRef.current!.style.transition = `none`;

    const element = event.currentTarget;

    const minDeviationDeg = 10;

    const elemWidth = element.getBoundingClientRect().width;
    const elemHeight = element.getBoundingClientRect().height;

    const biggestPlane = Math.max(elemWidth, elemHeight);
    const smallestPlane = Math.min(elemWidth, elemHeight);

    const planesRatio = biggestPlane / smallestPlane;

    const maxDeviationDegX = (elemWidth > elemHeight) ? minDeviationDeg : planesRatio * minDeviationDeg;
    const maxDeviationDegY = (elemHeight > elemWidth) ? minDeviationDeg : planesRatio * minDeviationDeg;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const elemOffsetX = element.getBoundingClientRect().x;
    const elemOffsetY = element.getBoundingClientRect().y;

    const elemCenterX = elemOffsetX + elemWidth / 2;
    const elemCenterY = elemOffsetY + elemHeight / 2;

    const centerElemOffsetX = mouseX - elemCenterX;
    const centerElemOffsetY = mouseY - elemCenterY;

    const deviationDegX = maxDeviationDegX / (elemWidth / 2) * centerElemOffsetX;
    const deviationDegY = maxDeviationDegY / (elemHeight / 2) * centerElemOffsetY;

    contentRef.current!.style.transform = `rotateX(${-deviationDegY}deg) rotateY(${deviationDegX}deg)`;
}

export const volumicBlur = (contentRef: React.RefObject<HTMLDivElement>) => {
    contentRef.current!.style.transition = `transform 1s ease-in-out`;
    contentRef.current!.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`;
}