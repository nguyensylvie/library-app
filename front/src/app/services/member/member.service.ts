import { Injectable } from "@angular/core";
import { Member } from "./member.model";
import { memberData } from "./member-data";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MemberService {
  private apiUrl = "http://localhost:9000/api/members";

  constructor(private http: HttpClient) {}

  // getMemberList(): Member[] {
  //   return memberData;
  // }

  // getMemberById(memberId: number): Member | undefined {
  //   return memberData.find((member) => member.id === memberId);
  // }

  // isMemberExists(memberId: number): boolean {
  //   const members = this.getMemberList();
  //   // Checks if a member with the matching ID exists in the member list
  //   return members.some((member) => member.id === memberId);
  // }

  // addMember(newMember: Member): void {
  //   newMember.id = memberData.length + 1;
  //   memberData.push(newMember);
  //   console.log(memberData);
  // }

  // editMember(member: Member): void {
  //   const index = memberData.findIndex((mem) => mem.id === member.id);
  //   if (index !== -1) {
  //     memberData[index] = member;
  //   }
  //   console.log(memberData);
  // }

  // deleteMember(memberId: number): void {
  //   const index = memberData.findIndex((member) => member.id === memberId);
  //   if (index !== -1) {
  //     memberData.splice(index, 1);
  //   }
  //   console.log(memberData);
  // }

  getAllMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.apiUrl);
  }

  getMemberById(memberId: number): Observable<Member> {
    const url = `${this.apiUrl}/${memberId}`;
    return this.http.get<Member>(url);
  }

  isMemberExists(memberId: number): Observable<boolean> {
    return this.getAllMembers().pipe(
      map((members: Member[]) => {
        // Checks if a member with the matching ID exists in the member list
        return members.some((member) => member.memberId === memberId);
      })
    );
  }

  addMember(newMember: Member): Observable<any> {
    return this.http.post(this.apiUrl, newMember);
  }

  updateMember(member: Member): Observable<any> {
    const url = `${this.apiUrl}/${member.memberId}`;
    return this.http.put(url, member);
  }

  deleteMember(memberId: number): Observable<any> {
    const url = `${this.apiUrl}/${memberId}`;
    return this.http.delete(url);
  }
}
