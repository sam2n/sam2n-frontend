import { Injectable } from "@angular/core";
const ENDPOINT_PREFIX = "";

@Injectable({
  providedIn: "root",
})
export class AppConfigurationService {
  getEndpointFor(api: string): string {
    return `${ENDPOINT_PREFIX}${api}`;
  }
}
