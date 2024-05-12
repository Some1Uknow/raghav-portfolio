"use client";
import ProjectCard from "@/components/ProjectCard";
import useEmblaCarousel from "embla-carousel-react";
import "./globals.css";
import { DotButton, useDotButton } from "./DotButtons";
import { PrevButton, NextButton, usePrevNextButtons } from "./ArrowButtons";

export default function EmblaCarousel({ projects }, props) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // const [emblaRef] = useEmblaCarousel();
  return (
    <section className="embla w-full text-white">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {projects.map((project, index) => (
            <div key={index} className="embla__slide max-sm:w-4/5">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// {projects.map((project, index) => (
//   <div key={index} className="embla__slide">
//     <ProjectCard project={project} />
//   </div>
// ))}
