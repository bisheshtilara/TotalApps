import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import totalApps from "../assets/apps_total.json";
import apps from "../assets/apps.json";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const Total = () => {
  const [totalCampaigns, setTotalCampaigns] = useState();
  useEffect(() => {
    let tmp = [];
    apps.map((data) => tmp.push(data.campaigns));

    setTotalCampaigns(
      tmp.reduce((first_value, second_value) => first_value + second_value, 0)
    );
  }, []);
  return (
    <TableContainer component={Box} style={{ border: "1px solid #E8E8E8" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {console.log(totalCampaigns)}
        <TableHead>
          <TableRow sx={{ backgroundColor: "#F8F8F8" }}>
            <TableCell
              sx={{
                fontWeight: 900,
                fontSize: 20,
              }}
            >
              Total
            </TableCell>
            <TableCell sx={{ color: "#808080" }} align="center">
              Campaigns
            </TableCell>
            <TableCell sx={{ color: "#808080" }} align="center">
              Ad Spend
            </TableCell>
            <TableCell sx={{ color: "#808080" }} align="center">
              Impressions
            </TableCell>
            <TableCell sx={{ color: "#808080" }} align="center">
              CPM
            </TableCell>
            <TableCell sx={{ color: "#808080" }} align="center">
              CPC
            </TableCell>
            <TableCell sx={{ color: "#808080" }} align="center">
              Installs
            </TableCell>
            <TableCell sx={{ color: "#808080" }} align="center">
              CPI
            </TableCell>
            <TableCell sx={{ color: "#808080" }} align="center">
              CR
            </TableCell>
            <TableCell sx={{ color: "#808080" }} align="center">
              CPA
            </TableCell>
            <TableCell sx={{ color: "#808080" }} align="center">
              Payers
            </TableCell>
            <TableCell sx={{ color: "#808080" }} align="center">
              Revenues
            </TableCell>
            <TableCell sx={{ color: "#808080" }} align="center">
              ROAS
            </TableCell>
            <TableCell sx={{ color: "#808080" }} align="center">
              pROAS D7
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell sx={{ paddingBottom: 10 }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                  <CalendarTodayIcon />
                </div>
                <span
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  Personal Details
                </span>
              </div>
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: 900, color: "#696969", paddingBottom: 20 }}
            >
              {totalCampaigns}
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "#696969", paddingBottom: 20 }}
            >
              €{Number(totalApps.ad_spend).toFixed(2)}
            </TableCell>
            <TableCell align="center" sx={{ paddingBottom: 20 }}>
              {totalApps.impressions}
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: 900, color: "#696969", paddingBottom: 20 }}
            >
              €
              {totalApps.cpm.toLocaleString("en-US", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 1,
              })}
            </TableCell>
            <TableCell align="center" sx={{ paddingBottom: 20 }}>
              €{Number(totalApps.cpc).toFixed(2)}
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: 900, color: "#696969", paddingBottom: 20 }}
            >
              {totalApps.installs}
            </TableCell>
            <TableCell align="center" sx={{ paddingBottom: 20 }}>
              €
              {totalApps.cpi.toLocaleString("en-US", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 1,
              })}
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "#00E281", fontWeight: 900, paddingBottom: 20 }}
            >
              {totalApps.cr.toLocaleString("en-US", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 1,
              })}
              %
            </TableCell>
            <TableCell align="center" sx={{ paddingBottom: 20 }}>
              €
              {totalApps.cpa.toLocaleString("en-US", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 1,
              })}
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "#696969", paddingBottom: 20 }}
            >
              {totalApps.payers}
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "#696969", paddingBottom: 20 }}
            >
              €
              {totalApps.revenues.toLocaleString("en-US", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 1,
              })}
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "#696969", fontWeight: 900, paddingBottom: 20 }}
            >
              {totalApps.roas.toLocaleString("en-US", {
                maximumFractionDigits: 1,
                minimumFractionDigits: 0,
              })}
              x
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "orange", fontWeight: 900, paddingBottom: 20 }}
            >
              {`${totalApps.predicted_ad_spend.toLocaleString("en-US", {
                maximumFractionDigits: 1,
                minimumFractionDigits: 0,
              })}
               | €${totalApps.predicted_roas_gain.toLocaleString("en-US", {
                 maximumFractionDigits: 2,
                 minimumFractionDigits: 1,
               })}
              | ${totalApps.predicted_revenues.toLocaleString("en-US", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 1,
              })}`}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Total;
