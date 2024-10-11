import json
from bs4 import BeautifulSoup
import requests

URL = ("https://cursos.alura.com.br/user/monteiro1998/"
       "fullCertificate/d09384258c409e9514b25a974c844fe4")
r = requests.get(URL, timeout=10)
html = r.text

soup = BeautifulSoup(html, 'html.parser')

courses = soup.find_all('li', class_='content-courseList-courseName')

course_list = []

course_list_exists = []

# Criação da lista de cursos
for course in courses:
    course_name = course.get_text(strip=True)
    course_list.append({
        "title": course_name.replace('\n', '')
        .replace('                                ', ' ')
        .replace('                            ', ' '),
        "Organization": "Alura",
        "url": URL
    })

course_list_final = course_list

# Carregamento da lista de cursos já existentes
with open('./public/cursos.json', 'r', encoding='utf-8') as f:
    course_list_exists = json.load(f)

# Adiciona cursos existentes, caso não estejam na lista final
for course in course_list_exists:
    if course not in course_list_final:
        course_list_final.append(course)

# Remover duplicados usando um conjunto para rastrear vistos
unique_courses = []
seen = set()

for course in course_list_final:
    course_tuple = (course['title'], course['Organization'],
                    course['url'])  # Criação de uma tupla única
    if course_tuple not in seen:
        seen.add(course_tuple)
        unique_courses.append(course)

course_list_final = unique_courses


if len(course_list_final) > len(course_list_exists):
    print("Novos cursos encontrados")
    with open('./public/cursos.json', 'w', encoding='utf-8') as f:
        json.dump(course_list_final, f, ensure_ascii=False, indent=4)
    print("Os cursos foram salvos em cursos.json")
