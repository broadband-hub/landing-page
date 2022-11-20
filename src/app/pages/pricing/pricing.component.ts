import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  organization_type = 'applicant';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  onOrgTypeChange($event: string) {
    this.router.navigate([], {
      queryParams: {
        type: $event
      },
      replaceUrl: true
    })
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const organization_type = params['type'];
      if (['applicant', 'consultant', 'service-provider'].includes(organization_type)) {
        this.organization_type = organization_type;
      }
      else {
        this.router.navigate([], {
          queryParams: {
            type: null
          },
          queryParamsHandling: 'merge',
          replaceUrl: false
        })
      }
    })
  }

}
