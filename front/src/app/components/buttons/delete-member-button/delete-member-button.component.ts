import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { MemberService } from "src/app/services/member/member.service";

@Component({
  selector: "app-delete-member-button",
  templateUrl: "./delete-member-button.component.html",
  styleUrls: ["./delete-member-button.component.scss"],
})
export class DeleteMemberButtonComponent {
  @Input() memberId: number;
  @Output() memberDeleted: EventEmitter<void> = new EventEmitter<void>();

  constructor(private memberService: MemberService, private router: Router) {}

  onDeleteMember(memberId: number): void {
    this.memberService.deleteMember(memberId).subscribe(() => {
      this.router.navigate(["/management/members"]);
      this.memberDeleted.emit();
    });
  }
}
