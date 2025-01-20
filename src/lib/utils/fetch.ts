class FetchService {
  private baseUrl = process.env.NEXT_PUBLIC_API_URL;

  async get<T>(endpoint: string): Promise<T> {
    console.log("url", `${this.baseUrl}${endpoint}`);
    const response = await fetch(`${this.baseUrl}${endpoint}`);

    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }

    return response.json();
  }

  async post<T>(endpoint: string, body?: T) {
    try {
      await fetch(`${this.baseUrl}${endpoint}`, {
        method: "POST",
        body: JSON.stringify(body),
      });

      return;
    } catch (error) {
      console.error(`Error in POST ${this.baseUrl}${endpoint}: `, error);
      throw error;
    }
  }

  async patch<T>(endpoint: string, body?: T) {
    try {
      await fetch(`${this.baseUrl}${endpoint}`, {
        method: "PATCH",
        body: JSON.stringify(body),
      });

      return;
    } catch (error) {
      console.error(`Error in PATCH ${this.baseUrl}${endpoint}: `, error);
      throw error;
    }
  }

  async delete<T>(endpoint: string, body?: T) {
    try {
      await fetch(`${this.baseUrl}${endpoint}`, {
        method: "DELETE",
        body: JSON.stringify(body),
      });
      return;
    } catch (error) {
      console.error(`Error in DELETE ${this.baseUrl}${endpoint}: `, error);
      throw error;
    }
  }
}

const fetchService = new FetchService();

export default fetchService;
