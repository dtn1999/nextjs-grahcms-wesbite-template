import {createHygraphClient} from "./client"
import {GET_LAYOUT_REQUEST} from "./requests/layout"
import {PAGES_SLUG_REQUEST, PAGE_REQUEST } from "./requests/pages"
import { PROJECTS_HOME_REQUEST } from "./requests/projects"

export {
    createHygraphClient, 
    /* Requests */
    // layout
    GET_LAYOUT_REQUEST, 
    // page
    PAGES_SLUG_REQUEST, 
    PAGE_REQUEST, 
    // projects
    PROJECTS_HOME_REQUEST
}
