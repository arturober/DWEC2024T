export class Http {
  async ajax(method, url, body = null) {
    const json = body && !(body instanceof FormData);
    const headers = body && json ? { "Content-Type": "application/json" } : {};
    const resp = await fetch(url, {
      method,
      headers,
      body: json ? JSON.stringify(body) : body,
    });

    if (!resp.ok) throw new Error(resp.statusText);

    if (resp.status != 204) {
      return resp.json();
    } else {
      return null; // 204 implica una respuesta sin datos
    }
  }

  get(url) {
    return this.ajax("GET", url);
  }

  post(url, body) {
    return this.ajax("POST", url, body);
  }

  put(url, body) {
    return this.ajax("PUT", url, body);
  }

  delete(url) {
    return this.ajax("DELETE", url);
  }
}
