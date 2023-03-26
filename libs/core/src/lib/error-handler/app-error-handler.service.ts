import { Injectable, ErrorHandler } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

import { NotificationService } from "../notifications/notification.service";
import { environment } from "../../../../../projects/demo/src/environments/environment";

/** Application-wide error handler that adds a UI notification to the error handling
 * provided by the default Angular ErrorHandler.
 */
@Injectable()
export class AppErrorHandler extends ErrorHandler {
  constructor(private notificationsService: NotificationService) {
    super();
  }

  override handleError(error: Error | HttpErrorResponse) {
    let displayMessage = "An error occurred.";

    if (!environment.production) {
      displayMessage += " See console for details.";
    }

    this.notificationsService.error(displayMessage);

    super.handleError(error);
  }
}
