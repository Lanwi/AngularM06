import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = "https://crudcrud.com/api/26a1741f6d23429caf2879fc5a832fb0";
 

  constructor(private httpClient: HttpClient) { 

    }

    getHttpClient(){
        return this.httpClient
    }

    getUrl(): string {
        return this.apiURL
    }

  getById(id): Observable<Post> {
    return this.httpClient.get<Post>(this.apiURL + '/posts/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiURL + '/posts/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

    errorHandler(errorHandler: any): import("rxjs").OperatorFunction<Post, any> {
        throw new Error();
    }

  add(post: Post) {
    return this.httpClient.post<Post>(this.apiURL+'/posts', post);
  } 

  deletepost(postId: string) {
    return this.httpClient.delete(this.apiURL+`/posts/${postId}`);
  }

  edit(postId: number, postEdited: Post) {
    //NOTE: postEdited ne doit pas avoir de propriété _id, l'api de crudcrud.com ne l'autorise pas avec le PUT
    //NOTE: si besoin de supprimer la propriété => delete postEdited._id
    return this.httpClient.put(this.apiURL+`/posts/${postId}`, postEdited);
  }
  

}