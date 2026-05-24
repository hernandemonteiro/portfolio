import React, { useEffect } from 'react';
import TemplatePage from '../../components/TemplatePage';
import Link from 'next/link';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import styles from './Courses.module.scss';

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
      <div className={styles.page}>
        <h1 className={styles.title}>Cursos e Formações ({courses.length})</h1>
        <div className={styles.list}>
          {Array.from(
            new Set(courses.map((course) => course.Organization))
          ).map((course, index) => {
            const organizationCourses = courses.filter(
              (courseTitle) => courseTitle.Organization == course
            );

            return (
              <div className={styles.orgItem} key={index}>
                <button
                  className={styles.orgHeader}
                  onClick={() => toggleCourse(course)}
                >
                  <div>
                    <div className={styles.orgName}>{course}</div>
                    <div className={styles.orgMeta}>
                      {organizationCourses.length} cursos
                    </div>
                  </div>
                  <span className={styles.orgChevron}>
                    {courseShow == course ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>
                </button>
                {courseShow === course && (
                  <ul className={styles.coursesList}>
                    {organizationCourses.map((course, index) => (
                      <li className={styles.courseItem} key={index}>
                        <span className={styles.courseTitle}>
                          {index + 1} - {course.title}
                        </span>
                        <Link
                          className={styles.courseLink}
                          target="__blank"
                          href={course.url}
                        >
                          Ver certificado completo
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </TemplatePage>
  );
}
