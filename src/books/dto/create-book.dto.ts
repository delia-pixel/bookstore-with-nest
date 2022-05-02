export class CreateBookDto {
  id: number;
  title: string;
  description: string;
  author: string;
  read?: boolean = false;
}
