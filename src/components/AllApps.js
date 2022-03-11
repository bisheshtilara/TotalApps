import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import apps from "../assets/apps.json";
import CreateIcon from "@mui/icons-material/Create";
import DownloadIcon from "@mui/icons-material/Download";

const AllApps = () => {
  return (
    <TableContainer component={Box} style={{ border: "1px solid #E8E8E8" }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              colSpan="100%"
              sx={{
                fontWeight: 900,
                fontSize: 20,
                lineHeight: 2,
                paddingLeft: 4,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  All Apps&nbsp;
                  <span
                    style={{
                      color: "#A8A8A8",
                      fontSize: 15,
                    }}
                  >{`(${apps.length})`}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#e8e8e8",
                      display: "flex",
                      borderRadius: "5px",
                      marginRight: 20,
                    }}
                  >
                    <CreateIcon
                      sx={{
                        color: "gray",
                        fontSize: 25,
                        cursor: "pointer",
                      }}
                    />
                  </div>
                  <DownloadIcon
                    sx={{
                      color: "#D3D3D3",
                      paddingTop: 0.5,
                      fontSize: 25,
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                color: "#A8A8A8",
              }}
            >
              Name
            </TableCell>
            <TableCell sx={{ color: "#A8A8A8" }} align="center">
              OS
            </TableCell>
            <TableCell sx={{ color: "#A8A8A8" }} align="center">
              Campaigns
            </TableCell>
            <TableCell sx={{ color: "#A8A8A8" }} align="center">
              Ad Spend
            </TableCell>
            <TableCell sx={{ color: "#A8A8A8" }} align="center">
              Impressions
            </TableCell>
            <TableCell sx={{ color: "#A8A8A8" }} align="center">
              CPM
            </TableCell>
            <TableCell sx={{ color: "#A8A8A8" }} align="center">
              CPC
            </TableCell>
            <TableCell sx={{ color: "#A8A8A8" }} align="center">
              Installs
            </TableCell>
            <TableCell sx={{ color: "#A8A8A8" }} align="center">
              CPI
            </TableCell>
            <TableCell sx={{ color: "#A8A8A8" }} align="center">
              CR
            </TableCell>
            <TableCell sx={{ color: "#A8A8A8" }} align="center">
              CPA
            </TableCell>
            <TableCell sx={{ color: "#A8A8A8" }} align="center">
              Payers
            </TableCell>
            <TableCell sx={{ color: "#A8A8A8" }} align="center">
              Revenues
            </TableCell>
            <TableCell sx={{ color: "#A8A8A8" }} align="center">
              ROAS
            </TableCell>
            <TableCell sx={{ color: "#A8A8A8" }} align="center">
              pROAS D7
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {apps.map((data) => (
            <TableRow
              key={data.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ fontWeight: 900, color: "#696969" }}
              >
                {data.name}
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 900,
                  color: "blue",
                }}
                align="center"
              >
                {data.platform}
              </TableCell>
              <TableCell
                sx={{ fontWeight: 900, color: "#696969" }}
                align="center"
              >
                {data.campaigns}
              </TableCell>
              <TableCell sx={{ color: "#696969" }} align="center">
                €{Number(data.ad_spend).toFixed(2)}
              </TableCell>
              <TableCell
                sx={{ fontWeight: 900, color: "#696969" }}
                align="center"
              >
                {data.impressions}
              </TableCell>
              <TableCell sx={{ color: "#696969" }} align="center">
                €
                {data.cpm.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 1,
                })}
              </TableCell>
              <TableCell sx={{ color: "#696969" }} align="center">
                €{Number(data.cpc).toFixed(2)}
              </TableCell>
              <TableCell
                sx={{ color: "#696969", fontWeight: 900 }}
                align="center"
              >
                {data.installs}
              </TableCell>
              <TableCell>
                €
                {data.cpi.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 1,
                })}
              </TableCell>
              <TableCell
                sx={{ color: "#00E281", fontWeight: 900 }}
                align="center"
              >
                {data.cr.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 1,
                })}
                %
              </TableCell>
              <TableCell sx={{ color: "#696969" }} align="center">
                €
                {data.cpa.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 1,
                })}
              </TableCell>
              <TableCell sx={{ color: "#696969" }} align="center">
                {data.payers}
              </TableCell>
              <TableCell sx={{ color: "#696969" }} align="center">
                €
                {data.revenues.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 1,
                })}
              </TableCell>
              <TableCell
                sx={{ fontWeight: 900, color: "#696969" }}
                align="center"
              >
                {data.roas.toLocaleString("en-US", {
                  maximumFractionDigits: 1,
                  minimumFractionDigits: 0,
                })}
                x
              </TableCell>
              <TableCell
                sx={{
                  color: data.has_prediction ? "orange" : "black",
                  fontWeight: data.has_prediction ? 900 : 400,
                }}
                align="center"
              >
                {data.has_prediction
                  ? `${data.predicted_roas.toLocaleString("en-US", {
                      maximumFractionDigits: 1,
                      minimumFractionDigits: 0,
                    })}x | €${data.predicted_roas_gain.toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 1,
                    })} | ${data.predicted_roas_accuracy}%`
                  : "Insufficient Data"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default AllApps;
