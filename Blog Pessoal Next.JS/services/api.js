import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://wpqbepoyhczqfrbsrrsm.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwcWJlcG95aGN6cWZyYnNycnNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwNDczMDYsImV4cCI6MjAwNTYyMzMwNn0.s9vE8D4Qp90X-Lj1S9D8vOcM6pbjB8D8iyRe0M-65yE",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwcWJlcG95aGN6cWZyYnNycnNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwNDczMDYsImV4cCI6MjAwNTYyMzMwNn0.s9vE8D4Qp90X-Lj1S9D8vOcM6pbjB8D8iyRe0M-65yE"
    }
})