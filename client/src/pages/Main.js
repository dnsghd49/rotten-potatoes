import {React} from "react";
import SlideShow from "../components/SlideShow";
import NewUpcoming from "../components/Carousel/newupcoming";
import "./style.css";
import PopularIn from "../components/Carousel/popular";
import BestSuperhero from "../components/Carousel/bestsuperhero";
import BestSeries from "../components/Carousel/bestseries";
import ChartList from "../components/Charts/charts";


function Main() {

  return (
      <div className="content">
      <SlideShow />
      <NewUpcoming />
      <ChartList />
      <PopularIn />
      <BestSuperhero />
      <BestSeries />
      </div>
  );
}

export default Main;
