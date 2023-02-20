import { StyledCourseBody, StyledCourseText, StyledCourseTitle } from "./courses.styles";
import { StyledContainer } from "../../styles/global";
import { GridSection } from "../GridSection/GridSection";
import { CardGrid, CardGridImage, CardGridItem } from "../CardGrid/CardGrid";
// import { courses } from "../../../data/courses";
import { useQuery } from "@tanstack/react-query";
import { courseApi } from "../../api";
import Loader from "../Loader";


export function Courses() {

    const { data: courses, isLoading, error } = useQuery({
        queryKey: ["courses"],
        queryFn: async () => {
            return await (await courseApi.getAll()).data.content;
        },
        staleTime: 50000
    });
    if (isLoading) return <Loader />
    if (error) return <h2>Hozirda kurslar mavjud emas...</h2>
    return (
        <GridSection paddingTop="171px" title="-To’garaklar-" subtitle="Maktabimizdagi mavjud to’garaklar bilan tanishing">
            <CardGrid gap="15px" itemWidth="300px">
                {courses?.map((course, index) => (
                    <CardGridItem key={crypto.randomUUID()} colSpan={course.colSpan}>
                        <CardGridImage src={course.image} width={300} height={250} />
                        <CourseBody title={course.titleUz} body={course.bodyUz} id={index + 1} />
                    </CardGridItem>
                ))}
            </CardGrid>
        </GridSection>
    )
}

export function CourseBody({ title, body, id }) {
    return <StyledCourseBody id={id}>
        <StyledCourseTitle>
            {title}
        </StyledCourseTitle>
        <StyledCourseText>
            {body}
        </StyledCourseText>
    </StyledCourseBody>
}