import React, { useEffect } from 'react';
import TemplatePage from '../../components/TemplatePage';
import Link from 'next/link';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

// TODO: refactor and turn into smaller components
export default function CoursesPage() {
  const [courseShow, setCourseShow] = React.useState('');
  const [courses, setCourses] = React.useState<
    Array<{
      title: string;
      Organization: string;
      url: string;
    }>
  >([]);

  useEffect(() => {
    fetch('/cursos.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCourses(data);
      });
  }, []);

  const toggleCourse = (course: string) => {
    if (courseShow == course) {
      setCourseShow('');
    } else {
      setCourseShow(course);
    }
  };

  return (
    <TemplatePage
      title="Hernande Monteiro - Experiências de trabalho"
      description="Experiências de trabalho de Hernande Monteiro, aqui você encontra em quais empresas já trabalhei."
      HomeMenu
    >
      <div>
        <h1
          style={{
            color: 'white',
            width: '100%',
            textAlign: 'center',
            padding: '20px',
          }}
        >
          Cursos e Formações ({courses.length})
        </h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '70vw',
          }}
        >
          {Array.from(
            new Set(courses.map((course) => course.Organization))
          ).map((course, index) => {
            return (
              <ul
                style={{
                  width: '100%',
                }}
                key={index}
              >
                <li
                  style={{
                    width: '100%',
                  }}
                >
                  <hr
                    style={{
                      color: 'white',
                      width: '100%',
                      height: '1px',
                      backgroundColor: 'white',
                      border: 'none',
                      margin: '10px 0',
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      width: '100%',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '10px',
                      cursor: 'pointer',
                    }}
                    onClick={() => toggleCourse(course)}
                  >
                    <h2
                      style={{
                        color: 'white',
                      }}
                    >
                      {course}
                    </h2>
                    {courseShow == course ? (
                      <IoIosArrowUp color="white" />
                    ) : (
                      <IoIosArrowDown color="white" />
                    )}
                  </div>
                  <hr
                    style={{
                      color: 'white',
                      width: '100%',
                      height: '1px',
                      backgroundColor: 'white',
                      border: 'none',
                      margin: '10px 0',
                    }}
                  />
                  {courseShow === course && (
                    <ul
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        width: '70vw',
                        marginLeft: '-30px',
                      }}
                    >
                      {courses
                        .filter(
                          (courseTitle) => courseTitle.Organization == course
                        )
                        .map((course, index) => {
                          return (
                            <li
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                                width: '100%',
                              }}
                              key={index}
                            >
                              <span
                                style={{
                                  color: 'white',
                                }}
                              >
                                {index + 1} - {course.title}
                              </span>
                              <Link target="__blank" href={course.url}>
                                Ver Certificado Completo
                              </Link>
                              <hr
                                style={{
                                  color: 'white',
                                  width: '100%',
                                  height: '1px',
                                  backgroundColor: 'white',
                                  border: 'none',
                                  margin: '10px 0',
                                }}
                              />
                            </li>
                          );
                        })}
                    </ul>
                  )}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </TemplatePage>
  );
}
