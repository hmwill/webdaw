// This file contains controller functions associated with the "Project" menu

import { PUBLIC_URL } from '../core/Common';
import { Project } from '../core/Project';

/**
 * Project > New
 */
export function createProject(callback: (project: Project) => void) {
  /* ... */
  console.log('Creating a new project.');
  const urlString = `${PUBLIC_URL.toString()}/templates/default-project.json`;
  console.log(`Creating a new project using template ${urlString}.`);

  fetch(urlString, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => {
      const project = Project.fromJson(json);
      callback(project);
    });
}

/**
 * Project > Load...
 */
export function loadProject() {
  /* ... */
  console.log('Loading an existing project.');
}

/**
 * Project > Save
 */
export function saveProject() {
  console.log('Save project');
}

/**
 * Project > Save As...
 */
export function saveAsProject() {
  console.log('Save As project');
}
