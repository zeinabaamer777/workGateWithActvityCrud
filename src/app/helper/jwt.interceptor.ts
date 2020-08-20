import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from 'app/login/login.service';
import { environment } from 'environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private authService: LoginService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        const currentUser = this.authService.currentUserValue;

        const isLoggedIn = currentUser && currentUser.token;

        const isApiUrl = request.url.startsWith(environment.apiUrl);

        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`,
                    Serial: `${currentUser.serialNumber}`,
                    ConnectionTypeXY: 'WA'
                }
            });
        }

        return next.handle(request);
    }
}