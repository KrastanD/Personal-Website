import uiuc from "../assets/uiuc-siebel.jpg";
import cod from "../assets/COD.jpeg";
import wnhs from "../assets/WNHS.jpeg";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div className="flex flex-col items-center">
      <EducationCard
        title="University of Illinois at Urbana-Champaign"
        image={uiuc}
        description="My alma mater. Of the 61 credit hours I took, 52 were computer science
        courses. I earned my degree in only two years with the help of my
        college and AP credits. I enjoyed my time there thoroughly and learned
        so much from the brilliant professors and peers. My focus was on Big
        Data, because I took courses about databases, artificial intelligence
        and machine learning. I took classes in many other fields though, as I
        love how broad computer science is and how much there is to learn."
      />
      <EducationCard
        title="College of DuPage"
        image={cod}
        description="A community college in the suburbs of Chicago where I took the majority
      of my Gen-Eds and engineering requirements. I had to keep a 4.0 GPA
      prior to applying to UIUC while working 20 hours per week. I learned a
      lot about time management and how to get the most out of myself."
      />
      <EducationCard
        title="Wheaton North High School"
        image={wnhs}
        description="My high school where I took my first computer science course and my love
      for programming began. I was also a four-year cross country and track
      and field runner."
      />
    </div>
  );
};

export default Education;
